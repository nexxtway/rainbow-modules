import { CSSProperties, ReactNode } from 'react';

export interface IsExpandedProps {
    isExpanded?: boolean;
}

export interface ContentProps {
    isScrolled?: boolean;
}

export interface ArrowIconProps extends IsExpandedProps {
    isDisabled?: boolean;
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
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied for the outer element. */
    style?: CSSProperties;
    /** The name is used to determine which StackedAccordionSection was clicked.
     * If `name` is not passed it will be generated. */
    name?: string;
    /** The text to be displayed as the StackedAccordionSection's label. */
    label?: ReactNode;
    defaultHeight?: number;
    /** Specifies that the StackedAccordionSection element should be disabled.
     * This value defaults to false. */
    disabled?: boolean;
}
