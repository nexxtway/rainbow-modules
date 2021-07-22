/// <reference types="cypress" />

export interface IPicklistPageObject {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    click: () => Cypress.Chainable<JQuery<HTMLElement>>;
    focus: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

/**
 * Page object to perform operations on Picklist
 * @type {IPicklistPageObject}
 */
class PicklistPageObject implements IPicklistPageObject {
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
     * @method
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="text"]');
    }

    /**
     * Click on the input element.
     * @method
     */
    click = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.input.click();
    };

    /**
     * Set focus on the input element.
     * @method
     */
    focus = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.input.focus();
    };
}

export default PicklistPageObject;
