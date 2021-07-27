/// <reference types="cypress" />

import CountryOption from './option';

export interface IPhoneInput {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    search(value: string): void;
    getOption(index: number): CountryOption;
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
     * Search for countries.
     * @method
     */
    search(value: string): void {
        cy.get(this.rootElement).find('button[type="button"]').click();
        cy.get(this.rootElement).find('input[type="text"]').type(value);
    }

    /**
     * Returns a new country option page object wraping the item at the
     * provided index.
     * @method
     * @param {number} index - The index of the option to return.
     * @returns {CountryOption} The new Option page object
     */
    getOption = (index: number): CountryOption => {
        return new CountryOption(
            `${this.rootElement} ul[role="listbox"] li[role="option"]:nth-child(${index})`,
        );
    };
}

export default PhoneInput;
