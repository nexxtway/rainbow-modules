import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { RenderIf } from 'react-rainbow-components';
import {
    StyledSection,
    StyledSectionContent,
    StyledSectionHeader,
    StyledResizeBar,
} from './styled';
import { StackedAccordionSectionProps, MoveProps } from './types';
import context from '../StackedAccordion/context';
import { Context } from '../StackedAccordion/types';
import RightArrow from './rightArrow';
import { useResize } from './hooks/useResize';
import shouldMove from '../ResizableColumns/helpers/shouldMove';

const StackedAccordionSection: React.FC<StackedAccordionSectionProps> = ({
    className,
    style,
    name,
    label,
    disabled,
    children,
}: React.PropsWithChildren<StackedAccordionSectionProps>) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const uniqueName = useUniqueIdentifier('section');
    const buttonId = useUniqueIdentifier('accordion-button');
    const sectionRef = useRef<HTMLDivElement>(null);
    const [resizeHandlerNode, setResizeHandlerNode] = useState<HTMLElement>();
    const resizeHandlerRef = useCallback((node) => {
        if (node !== null) {
            setResizeHandlerNode(node);
        }
    }, []);

    const {
        activeSectionNames,
        sections,
        registerSection,
        unregisterSection,
        onClick,
        setIsResizing: privateSetIsResizing,
    } = useContext<Context>(context);

    const getCurrentName = () => name || uniqueName;
    const sectionIndex = sections.findIndex((section) => {
        return section.name === getCurrentName();
    });

    useEffect(() => {
        const sectionName = getCurrentName();
        registerSection({
            name: sectionName,
            ref: sectionRef,
        });

        return () => {
            unregisterSection(sectionName);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, uniqueName]);

    const onResizeStart = useCallback(() => {
        privateSetIsResizing(true);
    }, [privateSetIsResizing]);
    const onResizeEnd = useCallback(() => {
        privateSetIsResizing(false);
    }, [privateSetIsResizing]);

    const handleResize = useCallback(
        ({ dy, clientY }: MoveProps) => {
            if (!shouldMove(dy, clientY, resizeHandlerNode, true)) return;
            if (sectionRef.current) {
                if (sectionIndex < 0) return;
                if (dy > 0) {
                    // move up
                    const prevResizableSection = [...sections]
                        .slice(0, sectionIndex)
                        .reverse()
                        .find((section) => {
                            if (section.ref.current && section.name !== getCurrentName()) {
                                const {
                                    height: prevSectionHeight,
                                } = section.ref.current.getBoundingClientRect();
                                return prevSectionHeight > 100;
                            }
                            return false;
                        })?.ref;
                    const nextResizableSection = [...sections]
                        .slice(sectionIndex)
                        .find((section) => {
                            return activeSectionNames.includes(section.name) && section.ref.current;
                        })?.ref;

                    if (!prevResizableSection || !prevResizableSection.current) return;
                    if (!nextResizableSection || !nextResizableSection.current) return;

                    const prevSectionBasis = parseInt(
                        getComputedStyle(prevResizableSection.current).flexBasis,
                        10,
                    );

                    const nextResizableSectionBasis = parseInt(
                        getComputedStyle(nextResizableSection.current).flexBasis,
                        10,
                    );
                    prevResizableSection.current.style.flexBasis = `${prevSectionBasis - dy}px`;
                    nextResizableSection.current.style.flexBasis = `${
                        nextResizableSectionBasis + dy
                    }px`;
                } else {
                    // move down
                    if (sectionIndex < 1) return;
                    const nextResizableSection = sections.slice(sectionIndex).find((section) => {
                        if (section.ref.current) {
                            const {
                                height: sectionHeight,
                            } = section.ref.current.getBoundingClientRect();
                            return sectionHeight > 100;
                        }
                        return false;
                    })?.ref;
                    const prevResizableSection = sections
                        .slice(0, sectionIndex)
                        .reverse()
                        .find((section) => {
                            if (section.ref.current) {
                                const {
                                    height: sectionHeight,
                                } = section.ref.current.getBoundingClientRect();
                                return sectionHeight >= 100;
                            }
                            return false;
                        })?.ref;

                    if (!nextResizableSection || !nextResizableSection.current) return;
                    const nextSectionBasis = parseInt(
                        getComputedStyle(nextResizableSection.current).flexBasis,
                        10,
                    );
                    if (prevResizableSection?.current) {
                        const prevSectionBasis = parseInt(
                            getComputedStyle(prevResizableSection.current).flexBasis,
                            10,
                        );
                        prevResizableSection.current.style.flexBasis = `${prevSectionBasis - dy}px`;
                    }

                    nextResizableSection.current.style.flexBasis = `${nextSectionBasis + dy}px`;
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [sections, activeSectionNames, sectionIndex, resizeHandlerNode],
    );

    const [isResizing, onMouseDown] = useResize({
        handlerElement: resizeHandlerNode,
        onMove: handleResize,
        onResizeStart,
        onResizeEnd,
    });

    const handleClick = () => {
        if (onClick) onClick(getCurrentName());
    };

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop } = event.currentTarget;
        if (isScrolled && scrollTop === 0) setIsScrolled(false);
        if (!isScrolled && scrollTop > 0) setIsScrolled(true);
    };

    const isExpanded = activeSectionNames?.some((value) => value === getCurrentName());

    return (
        <StyledSection className={className} style={style} isExpanded={isExpanded} ref={sectionRef}>
            <RenderIf isTrue={sectionIndex > 0 && isExpanded}>
                <StyledResizeBar
                    isResizing={isResizing}
                    ref={resizeHandlerRef}
                    data-resizes={getCurrentName()}
                    onMouseDown={onMouseDown}
                />
            </RenderIf>
            <h3>
                <StyledSectionHeader
                    id={buttonId}
                    disabled={disabled}
                    aria-expanded={isExpanded}
                    aria-controls={getCurrentName()}
                    aria-disabled={disabled}
                    onClick={handleClick}
                >
                    <RightArrow isExpanded={isExpanded} />
                    {label}
                </StyledSectionHeader>
            </h3>
            <RenderIf isTrue={isExpanded}>
                <StyledSectionContent
                    id={getCurrentName()}
                    role="region"
                    aria-labelledby={buttonId}
                    isScrolled={isScrolled}
                    onScroll={handleScroll}
                >
                    {children}
                </StyledSectionContent>
            </RenderIf>
        </StyledSection>
    );
};

export default StackedAccordionSection;
