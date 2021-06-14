import { CSSProperties, ReactNode } from 'react';

export interface IsExpandedProps {
    isExpanded?: boolean;
}

export interface StackedAccordionSectionProps {
    className?: string;
    style?: CSSProperties;
    name?: string;
    label?: ReactNode;
    defaultHeight?: number;
    /** Specifies that the AccordionSection element should be disabled.
     * This value defaults to false. */
    disabled?: boolean;
}
