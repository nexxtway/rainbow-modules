/// <reference types="cypress" />

import InternalDropdown from '../InternalDropdown';
import Option from '../Option';

export interface IAvatarMenu {
    button: Cypress.Chainable<JQuery<HTMLButtonElement>>;
    getOption: (index: number) => Option;
}

/**
 * The AvatarMenu page object allows to perform actions on the AvatarMenu component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IAvatarMenu}
 * @type {AvatarMenu}
 */
class AvatarMenu implements IAvatarMenu {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the AvatarMenu.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the button element of this AvatarMenu.
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
    // eslint-disable-next-line class-methods-use-this
    getOption(index: number): Option {
        const dropdown = new InternalDropdown('[data-id="primitive-menu_dropdown"] > ul');
        return dropdown.getOption(index);
    }
}

export default AvatarMenu;
