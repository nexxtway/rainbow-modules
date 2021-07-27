/// <reference types="cypress" />

import CountryOption from './option';

export interface IPhoneInput {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    options: CountryOption[];
    search(value: string): void;
}

/**
 * Rainbow Input Page Object
 * @type {IPhoneInput}
 */
class PhoneInput implements IPhoneInput {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element.
     * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="tel"]');
    }

    /**
     * Array of CountryOption page objects where each item wraps a country option
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
     */
    search(value: string): void {
        cy.get(this.rootElement).find('button[type="button"]').click();
        cy.get(this.rootElement).find('input[type="text"]').type(value);
    }
}

export default PhoneInput;
