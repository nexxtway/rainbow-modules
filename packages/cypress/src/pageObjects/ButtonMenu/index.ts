/// <reference types="cypress" />

export interface IButtonMenu {
    button: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * The ButtonMenu page object allows to perform actions on the ButtonMenu component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IButtonMenu}
 */
class ButtonMenu implements IButtonMenu {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the ButtonMenu.
     * @example
     * import { ButtonMenu } from '@rainbow-modules/cypress/pageObjects';
     *
     * const buttonMenu = new ButtonMenu('#buttonmenu-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the button element of this ButtonMenu.
     * @member {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     * @example
     * buttonMenu.button.click();
     */
    get button(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement).find('button');
    }
}

export default ButtonMenu;
