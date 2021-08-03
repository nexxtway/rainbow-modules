/// <reference types="cypress" />

export interface ICountryOption {
    click: () => void;
}

/**
 * The CountryOption page object allows to perform actions on the options of a PhoneInput
 * component.
 *
 * You will almost never need to use this page object directly.
 * Use `PhoneInput.options` instead.
 * @class
 * @implements {ICountryOption}
 * @type {CountryOption}
 */
class CountryOption implements ICountryOption {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the CountryOption.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the option
     * @method
     */
    click(): void {
        cy.get(this.rootElement).scrollIntoView().click();
    }
}

export default CountryOption;
