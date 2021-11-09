/// <reference types="cypress" />
import AccordionSection from './section';

export interface IAccordion {
    getSection: (index: number) => AccordionSection;
}

/**
 * The Accordion page object allows to perform actions on the Accordion component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IAccordion}
 * @type {Accordion}
 */
class Accordion implements IAccordion {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object.
     * @param rootElement The selector for the root element of the Button.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    getSection(index: number): AccordionSection {
        return new AccordionSection(
            `${this.rootElement} [data-id="accordion-section-li"]:nth(${index})`,
        );
    }
}

export default Accordion;
