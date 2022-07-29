/// <reference types="cypress" />
import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the section is active
     * @param active {boolean}
     */
    (chainer: 'active', active: boolean): void;
}

export interface IAccordionSection {
    click: () => void;
    expect: Chainer;
    button: Cypress.Chainable<JQuery<HTMLButtonElement>>;
    content: Cypress.Chainable<JQuery<HTMLElement>>;
}

/**
 * The AccordionSection page object allows to perform actions on the AccordionSection component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IAccordionSection}
 * @type {AccordionSection}
 */
class AccordionSection implements IAccordionSection {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        active: (_: string, active: boolean) => {
            const assertion = active ? 'be.visible' : 'not.be.visible';
            cy.get(`${this.rootElement} [data-id="accordion-section-content"]`).should(assertion);
        },
    };

    /**
     * Constructs a new instance of this page object.
     * @param rootElement The selector for the root element of the Button.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: unknown[]) =>
            this.assertMap[chainer](chainer, ...params);
    }

    /**
     * Clicks the section
     * @method
     */
    click(): void {
        cy.get(this.rootElement).find('[data-id="accordion-section-summary"]').click();
    }

    /**
     * Gets the summary button element.
     * @member {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     */
    get button(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(`${this.rootElement} [data-id="accordion-section-summary"]`);
    }

    /**
     * Gets the content of this section
     * @member {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    get content(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.rootElement} [data-id="accordion-section-content"]`);
    }
}

export default AccordionSection;
