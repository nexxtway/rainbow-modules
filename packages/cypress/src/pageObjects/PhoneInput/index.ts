/// <reference types="cypress" />

import CountryOption from './option';

export interface IPhoneInput {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    options: CountryOption[];
    search(value: string): void;
}

/**
 * The PhoneInput page object allows to perform actions on the PhoneInput component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IPhoneInput}
 */
class PhoneInput implements IPhoneInput {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the PhoneInput.
     * @example
     * import { PhoneInput } from '@rainbow-modules/cypress/pageObjects';
     *
     * const phoneInput = new phoneInput('#phoneinput-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * The input element of the PhoneInput
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     * @example
     * // Type something in the Lookup
     * phoneInput.input.type('+1-212-456-7890');
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="tel"]');
    }

    /**
     * Array of CountryOption page objects where each item wraps a country option
     * @member {CountryOption[]}
     * @example
     * // Click an option
     * phoneInput.options[2].click();
     */
    get options(): CountryOption[] {
        const { length } = Cypress.$(`${this.rootElement} ul[role="listbox"] li[role="option"]`);
        return Array.from(
            { length },
            (_v, i) =>
                new CountryOption(
                    `${this.rootElement} ul[role="listbox"] li[role="option"]:nth-child(${i + 1})`,
                ),
        );
    }

    /**
     * Search for countries.
     * @method
     * @param {string} value - The search query
     * @example
     * phoneInput.search('Mexico')
     */
    search(value: string): void {
        cy.get(this.rootElement).find('button[type="button"]').click();
        cy.get(this.rootElement).find('input[type="text"]').type(value);
    }
}

export default PhoneInput;
