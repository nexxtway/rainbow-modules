/// <reference types="cypress" />

export interface IPicklist {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    click: () => void;
    focus: () => void;
}

/**
 * Page object to perform operations on Picklist
 * @type {IPicklist}
 */
class PicklistPageObject implements IPicklist {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element
     * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="text"]');
    }

    /**
     * Click on the input element.
     * @method
     */
    click = (): void => {
        this.input.click();
    };

    /**
     * Set focus on the input element.
     * @method
     */
    focus = (): void => {
        this.input.focus();
    };
}

export default PicklistPageObject;
