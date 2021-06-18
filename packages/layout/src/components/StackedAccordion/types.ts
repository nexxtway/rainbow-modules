import { CSSProperties } from 'react';

export interface Context {
    activeSectionNames: Array<string>;
    sections: Array<Section>;
    registerSection: (section: Section) => void;
    unregisterSection: (sectionName: string) => void;
    onClick: (sectionName: string) => void;
    setIsResizing: (state: boolean) => void;
}

export interface Section {
    name: string;
    ref: React.RefObject<HTMLElement>;
}

export interface StackedAccordionProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied for the outer element. */
    style?: CSSProperties;
    /** It contain the name of the StackedAccordionSection that is expanded.
     * It must match the name of the StackedAccordionSection. */
    activeSectionNames?: Array<string>;
    /** Action fired when an StackedAccordionSection is selected.
     * Receives an array with the active section names as parameter. */
    onToggleSection?: (activeSectionNames: Array<string>) => void;
}
