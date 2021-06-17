import { CSSProperties, ReactNode } from 'react';

export interface ContainerProps {
    isResizing?: boolean;
}

export interface DividerProps {
    isResizing?: boolean;
    offset?: number;
    hideDivider?: boolean;
}

export interface ColumnProps {
    columnWidth?: number;
    minWidth?: string;
    initialDividerPosition?: number;
}

export type Width = {
    px?: number;
    percent?: number;
};

type OnResizeParams = {
    dividerPosition?: number;
};

export interface ResizableColumnsProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied for the outer element. */
    style?: CSSProperties;
    /**
     * The initial divider position.
     *
     * When passing a positive number it specifies the position from the left, and when the number
     * is less than zero then it specifies the position from the right.
     */
    initialDividerPosition?: number;
    /**
     * When true, hides the divider until the pointer is over.
     */
    hideDivider?: boolean;
    /**
     * The content to render on the left column.
     */
    leftColumn?: ReactNode;
    /**
     * The content to render on the right column.
     */
    rightColumn?: ReactNode;
    /**
     * The minimum width of the left column.
     */
    minLeftWidth?: Width;
    /**
     * The minimum width of the right column.
     */
    minRightWidth?: Width;
    /**
     * Function to invoke when the user finishes resizing.
     *
     * Useful to store the size of the columns.
     */
    onResize?: ({ dividerPosition }: OnResizeParams) => void;
}
