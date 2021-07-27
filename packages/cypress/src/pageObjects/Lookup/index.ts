/// <reference types="cypress" />

export interface ILookup {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    clearButton: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * Page object to represent a Lookup.
 * @type {ILookup}
 */
class Lookup implements ILookup {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input');
    }

    get clearButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement).find('button');
    }
}

export default Lookup;
