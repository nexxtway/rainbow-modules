/// <reference types="cypress" />

import InternalDropdown from '../InternalDropdown';
import Option from '../Option';

export interface IPicklist {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    getOption: (index: number) => Option;
    click: () => void;
    focus: () => void;
}
/**
 * The Picklist page object allows to perform actions on the Picklist component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IPicklist}
 * @type {Picklist}
 */
class Picklist implements IPicklist {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Picklist.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="text"]');
    }

    /**
     * Click the input element. Shortcut for `picklist.input.click()`.
     * @method
     */
    click(): void {
        this.input.click();
    }

    /**
     * Focus the input element. Shortcut for `picklist.input.focus()`.
     * @method
     */
    focus(): void {
        this.input.focus();
    }

    /**
     * Get an Option page object wrapping the `index + 1` option
     * @method
     * @param {number} index - The option index, starting at 0 for the first option
     * @returns {Option}
     */
    getOption(index: number): Option {
        const ariaControls = Cypress.$(`${this.rootElement} input`).attr('aria-controls');
        const dropdown = new InternalDropdown(`#${ariaControls}`);
        return dropdown.getOption(index);
    }
}

export default Picklist;
