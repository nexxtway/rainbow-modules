import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ResizableColumnsProps } from './types';
import { StyledContainer, StyledLeftColumn, StyledRightColumn, StyledDivider } from './styled';
import getMinWidth from './helpers/getMinWidth';
import shouldMove from './helpers/shouldMove';

const ResizableColumns: React.FC<ResizableColumnsProps> = ({
    initialDividerWidth,
    hideDivider,
    leftColumn,
    rightColumn,
    minLeftWidth,
    minRightWidth,
    onResize,
}: ResizableColumnsProps) => {
    const cursorX = useRef<number | undefined>(undefined);
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const rightColumnRef = useRef<HTMLDivElement>(null);
    const separatorRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [offset, setOffset] = useState(0);

    const setColumnWidth = (ref: React.RefObject<HTMLDivElement>, width: number) => {
        if (ref.current) {
            // eslint-disable-next-line no-param-reassign
            ref.current.style.width = `${width}px`;
        }
    };

    const getColumnWidth = (ref: React.RefObject<HTMLDivElement>) =>
        ref.current ? parseInt(getComputedStyle(ref.current).width, 10) : 0;

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (isResizing && cursorX.current && initialDividerWidth) {
                if (initialDividerWidth >= 0) {
                    const dx = cursorX.current - event.pageX;
                    cursorX.current = event.pageX;
                    if (shouldMove(dx, cursorX.current, separatorRef.current)) {
                        setColumnWidth(leftColumnRef, getColumnWidth(leftColumnRef) - dx);
                        setOffset(getColumnWidth(leftColumnRef));
                    }
                } else if (initialDividerWidth < 0 && rightColumnRef.current) {
                    const dx = cursorX.current - event.pageX;
                    cursorX.current = event.pageX;
                    if (shouldMove(dx, cursorX.current, separatorRef.current)) {
                        setColumnWidth(rightColumnRef, getColumnWidth(rightColumnRef) + dx);
                        setOffset(getColumnWidth(rightColumnRef));
                    }
                }
            }
        },
        [initialDividerWidth, isResizing],
    );

    const handleMouseUp = useCallback(() => {
        cursorX.current = undefined;
        setIsResizing(false);
        let dividerWidth;
        if (initialDividerWidth && initialDividerWidth >= 0 && leftColumnRef.current) {
            dividerWidth = parseInt(getComputedStyle(leftColumnRef.current).width, 10);
        } else if (initialDividerWidth && initialDividerWidth < 0 && rightColumnRef.current) {
            dividerWidth = parseInt(getComputedStyle(rightColumnRef.current).width, 10) * -1;
        }
        return onResize?.({
            dividerWidth,
        });
    }, [initialDividerWidth, onResize]);

    const handleMouseDown = (event: React.MouseEvent) => {
        cursorX.current = event.pageX;
        setIsResizing(true);
    };

    useEffect(() => {
        if (initialDividerWidth && initialDividerWidth >= 0 && leftColumnRef.current) {
            setColumnWidth(leftColumnRef, initialDividerWidth);
            setOffset(initialDividerWidth);
        } else if (initialDividerWidth && initialDividerWidth < 0 && rightColumnRef.current) {
            setColumnWidth(rightColumnRef, Math.abs(initialDividerWidth));
        }
    }, [initialDividerWidth]);

    useEffect(() => {
        if (isResizing) {
            // TODO: handle ssr
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp, isResizing]);

    return (
        <StyledContainer isResizing={isResizing}>
            <StyledLeftColumn
                initialDividerWidth={initialDividerWidth}
                minWidth={getMinWidth(minLeftWidth ?? {})}
                ref={leftColumnRef}
            >
                {leftColumn}
            </StyledLeftColumn>
            <StyledDivider
                isResizing={isResizing}
                offset={offset}
                hideDivider={hideDivider}
                onMouseDown={handleMouseDown}
                ref={separatorRef}
            />
            <StyledRightColumn
                initialDividerWidth={initialDividerWidth}
                minWidth={getMinWidth(minRightWidth ?? {})}
                ref={rightColumnRef}
            >
                {rightColumn}
            </StyledRightColumn>
        </StyledContainer>
    );
};

ResizableColumns.defaultProps = {
    initialDividerWidth: undefined,
    hideDivider: false,
    leftColumn: undefined,
    rightColumn: undefined,
    minLeftWidth: {
        px: 0,
    },
    minRightWidth: {
        px: 0,
    },
    onResize: undefined,
};

export default ResizableColumns;
