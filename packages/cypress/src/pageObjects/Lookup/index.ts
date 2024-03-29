/// <reference types="cypress" />

import InternalDropdown from '../InternalDropdown';
import Option from '../Option';

export interface ILookup {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    clearButton: Cypress.Chainable<JQuery<HTMLButtonElement>>;
    getOption: (index: number) => Option;
}

/**
 * The Lookup page object allows to perform actions on the Lookup component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ILookup}
 * @type {Lookup}
 */
class Lookup implements ILookup {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Lookup.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * The input element of this Lookup
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input');
    }

    /**
     * Get the clear button of this Lookup
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get clearButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement).find('button');
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

export default Lookup;
