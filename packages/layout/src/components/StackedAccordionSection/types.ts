import { CSSProperties, ReactNode } from 'react';

export interface IsExpandedProps {
    isExpanded?: boolean;
}

export interface ContentProps {
    isScrolled?: boolean;
}

export interface MoveProps {
    dx: number;
    dy: number;
    clientX: number;
    clientY: number;
}

export interface UseResizeProps {
    handlerElement?: HTMLElement;
    onMove: (params: MoveProps) => void;
    onResizeStart?: (event: React.MouseEvent) => void;
    onResizeEnd?: (event: MouseEvent) => void;
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
