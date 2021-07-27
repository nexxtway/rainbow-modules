/// <reference types="cypress" />
export interface IButton {
    button: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * Rainbow Button Page Object
 * @type {IButton}
 */
class Button implements IButton {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the button element.
     * @returns {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     */
    get button(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement);
    }
}

export default Button;
