/// <reference types="cypress" />

export interface IButtonMenu {
    button: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * Page object to perform operations on a ButtonMenu
 * @type {IButtonMenu}
 */
class ButtonMenu implements IButtonMenu {
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
        return cy.get(this.rootElement).find('button');
    }
}

export default ButtonMenu;
