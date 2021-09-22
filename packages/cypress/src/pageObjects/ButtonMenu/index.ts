/// <reference types="cypress" />

import InternalDropdown from '../InternalDropdown';
import Option from '../Option';

export interface IButtonMenu {
    button: Cypress.Chainable<JQuery<HTMLButtonElement>>;
    getOption: (index: number) => Option;
}

/**
 * The ButtonMenu page object allows to perform actions on the ButtonMenu component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IButtonMenu}
 * @type {ButtonMenu}
 */
class ButtonMenu implements IButtonMenu {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the ButtonMenu.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the button element of this ButtonMenu.
     * @member {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     */
    get button(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement).find('button');
    }

    /**
     * Get an Option page object wrapping the `index + 1` option
     * @method
     * @param {number} index - The option index, starting at 0 for the first option
     * @returns {Option}
     */
    getOption(index: number): Option {
        const ariaControls = Cypress.$(`${this.rootElement} button`).attr('aria-controls');
        const dropdown = new InternalDropdown(`#${ariaControls}`);
        return dropdown.getOption(index);
    }
}

export default ButtonMenu;
