/// <reference types="cypress" />
export interface IButton {
    button: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * The Button page object allows to perform actions on the Button component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IButton}
 * @type {Button}
 */
class Button implements IButton {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object.
     * @param rootElement The selector for the root element of the Button.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the button element.
     * @member {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     */
    get button(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement);
    }
}

export default Button;
