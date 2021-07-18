import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ResizableColumnsProps } from './types';
import { StyledContainer, StyledLeftColumn, StyledRightColumn, StyledDivider } from './styled';
import getMinWidth from './helpers/getMinWidth';
import shouldMove from '../../helpers/shouldMove';

const ResizableColumns: React.FC<ResizableColumnsProps> = ({
    className,
    style,
    initialDividerPosition,
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
            if (isResizing && cursorX.current && initialDividerPosition) {
                if (initialDividerPosition >= 0) {
                    const dx = cursorX.current - event.pageX;
                    cursorX.current = event.pageX;
                    if (shouldMove(dx, cursorX.current, separatorRef.current)) {
                        setColumnWidth(leftColumnRef, getColumnWidth(leftColumnRef) - dx);
                        setOffset(getColumnWidth(leftColumnRef));
                    }
                } else if (initialDividerPosition < 0 && rightColumnRef.current) {
                    const dx = cursorX.current - event.pageX;
                    cursorX.current = event.pageX;
                    if (shouldMove(dx, cursorX.current, separatorRef.current)) {
                        setColumnWidth(rightColumnRef, getColumnWidth(rightColumnRef) + dx);
                        setOffset(getColumnWidth(rightColumnRef));
                    }
                }
            }
        },
        [initialDividerPosition, isResizing],
    );

    const handleMouseUp = useCallback(() => {
        cursorX.current = undefined;
        setIsResizing(false);
        let dividerPosition;
        if (initialDividerPosition && initialDividerPosition >= 0 && leftColumnRef.current) {
            dividerPosition = parseInt(getComputedStyle(leftColumnRef.current).width, 10);
        } else if (initialDividerPosition && initialDividerPosition < 0 && rightColumnRef.current) {
            dividerPosition = parseInt(getComputedStyle(rightColumnRef.current).width, 10) * -1;
        }
        return onResize?.({
            dividerPosition,
        });
    }, [initialDividerPosition, onResize]);

    const handleMouseDown = (event: React.MouseEvent) => {
        cursorX.current = event.pageX;
        setIsResizing(true);
    };

    useEffect(() => {
        if (initialDividerPosition && initialDividerPosition >= 0 && leftColumnRef.current) {
            setColumnWidth(leftColumnRef, initialDividerPosition);
            setOffset(initialDividerPosition);
        } else if (initialDividerPosition && initialDividerPosition < 0 && rightColumnRef.current) {
            setColumnWidth(rightColumnRef, Math.abs(initialDividerPosition));
        }
    }, [initialDividerPosition]);

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
        <StyledContainer className={className} style={style} isResizing={isResizing}>
            <StyledLeftColumn
                initialDividerPosition={initialDividerPosition}
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
                initialDividerPosition={initialDividerPosition}
                minWidth={getMinWidth(minRightWidth ?? {})}
                ref={rightColumnRef}
            >
                {rightColumn}
            </StyledRightColumn>
        </StyledContainer>
    );
};

ResizableColumns.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
     * The initial divider position.
     *
     * When passing a positive number it specifies the position from the left, and when the number
     * is less than zero then it specifies the position from the right.
     */
    initialDividerPosition: PropTypes.number,
    /**
     * When true, hides the divider until the pointer is over.
     */
    hideDivider: PropTypes.bool,
    /**
     * The content to render on the left column.
     */
    leftColumn: PropTypes.node,
    /**
     * The content to render on the right column.
     */
    rightColumn: PropTypes.node,
    /**
     * The minimum width of the left column.
     */
    minLeftWidth: PropTypes.shape({
        px: PropTypes.number,
        percent: PropTypes.number,
    }),
    /**
     * The minimum width of the right column.
     */
    minRightWidth: PropTypes.shape({
        px: PropTypes.number,
        percent: PropTypes.number,
    }),
    /**
     * Function to invoke when the user finishes resizing.
     *
     * Useful to store the size of the columns.
     */
    onResize: PropTypes.func,
};

ResizableColumns.defaultProps = {
    className: undefined,
    style: undefined,
    initialDividerPosition: undefined,
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
