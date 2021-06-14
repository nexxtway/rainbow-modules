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
    className?: string;
    style?: CSSProperties;
    activeSectionNames?: Array<string>;
    onActiveSectionsChange?: (activeSectionNames: Array<string>) => void;
}
