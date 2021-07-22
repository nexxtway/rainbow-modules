/// <reference types="cypress" />
export interface IInput {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
}

/**
 * Rainbow Input Page Object
 * @type {IInput}
 */
class Input implements IInput {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element.
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input');
    }
}

export default Input;
