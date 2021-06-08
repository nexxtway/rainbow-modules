import { ReactNode } from 'react';

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
    initialDividerWidth?: number;
}

export type Width = {
    px?: number;
    percent?: number;
};

type OnResizeParams = {
    dividerWidth?: number;
};

export interface ResizableColumnsProps {
    /**
     * Sets the initial width for the main column.
     *
     * By default the main column is the left one. Pass a value less than zero to set the right column
     * as the main one.
     */
    initialDividerWidth?: number;
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
    onResize?: ({ dividerWidth }: OnResizeParams) => void;
}
