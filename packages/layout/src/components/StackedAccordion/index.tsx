import React, { useRef, useState } from 'react';
import { Provider } from './context';
import { Section, StackedAccordionProps, Context } from './types';
import { StyledContainer } from './styled';
import { getChildAccordionSectionNodes, insertSectionOrderly } from './utils';

const StackedAccordion: React.FC<StackedAccordionProps> = ({
    className,
    style,
    activeSectionNames,
    onToggleSection,
    children,
}: React.PropsWithChildren<StackedAccordionProps>) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSections, setActiveSections] = useState(activeSectionNames);
    const [sections, setSections] = useState<Array<Section>>([]);
    const [isResizing, setIsResizing] = useState<boolean>();

    const isSectionActive = (sectionName?: string) => {
        return activeSections?.some((name) => name === sectionName) ?? false;
    };

    const registerSection = (section: Section) => {
        if (!containerRef.current) return;
        const [...nodes] = getChildAccordionSectionNodes(containerRef.current);
        setSections((prevSections) => {
            const newSections = insertSectionOrderly(prevSections, section, nodes);
            return newSections;
        });
    };

    const unregisterSection = (sectionName: string) => {
        const newSections = [...sections];
        newSections.filter((section) => section.name !== sectionName);
        setSections(newSections);
    };

    const handleSectionClick = (name: string) => {
        if (!name) return;
        if (isSectionActive(name)) {
            const newSections = activeSections?.filter((value) => value !== name) ?? [];
            setActiveSections(newSections);
            if (onToggleSection) onToggleSection(newSections);
        } else {
            const newSections = [...(activeSections ?? []), name];
            setActiveSections(newSections);
            if (onToggleSection) onToggleSection(newSections);
        }
    };

    const contextValue: Context = {
        activeSectionNames: activeSections ?? [],
        sections,
        registerSection,
        unregisterSection,
        onClick: handleSectionClick,
        setIsResizing,
    };

    return (
        <StyledContainer
            className={className}
            style={style}
            isResizing={isResizing}
            ref={containerRef}
        >
            <Provider value={contextValue}>{children}</Provider>
        </StyledContainer>
    );
};

export default StackedAccordion;
