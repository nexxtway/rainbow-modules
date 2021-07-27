/// <reference types="cypress" />

export interface ICountryOption {
    click: () => void;
}

/**
 * Page object to perform operations on a country option
 * @type {ICountryOption}
 */
class CountryOption implements ICountryOption {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the country option
     * @method
     */
    click(): void {
        cy.get(this.rootElement).scrollIntoView().click();
    }
}

export default CountryOption;
