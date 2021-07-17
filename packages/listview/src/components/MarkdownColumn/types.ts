import { CSSProperties } from 'react';

export interface MarkdownColumnProps {
    className?: string;
    style?: CSSProperties;
    /** A string that comes from the data and is displayed in the table cell  */
    value?: string;
}
