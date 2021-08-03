/// <reference types="cypress" />

export interface ILookup {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    clearButton: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * The Lookup page object allows to perform actions on the Lookup component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ILookup}
 * @type {Lookup}
 */
class Lookup implements ILookup {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Lookup.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * The input element of this Lookup
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input');
    }

    /**
     * Get the clear button of this Lookup
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get clearButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement).find('button');
    }
}

export default Lookup;
