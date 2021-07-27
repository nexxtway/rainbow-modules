/// <reference types="cypress" />
export interface IInput {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    check(): void;
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

    /**
     * Check the input when type is `checkbox` or `radio`
     */
    check(): void {
        // TODO: verify if it is already checked before check it
        cy.get(this.rootElement).find('label').click('left');
    }
}

export default Input;
