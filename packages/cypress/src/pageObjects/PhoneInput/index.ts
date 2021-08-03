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
 * @type {PhoneInput}
 */
class PhoneInput implements IPhoneInput {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the PhoneInput.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * The input element of the PhoneInput
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="tel"]');
    }

    /**
     * Array of CountryOption page objects where each item wraps a country option
     * @member {CountryOption[]}
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
     */
    search(value: string): void {
        cy.get(this.rootElement).find('button[type="button"]').click();
        cy.get(this.rootElement).find('input[type="text"]').type(value);
    }
}

export default PhoneInput;
