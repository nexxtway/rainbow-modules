/// <reference types="cypress" />

export interface IOptionPageObject {
    click: () => Cypress.Chainable<JQuery<HTMLElement>>;
    hover: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

/**
 * Page object to perform operations on Option
 * @type {IOptionPageObject}
 */
class OptionPageObject implements IOptionPageObject {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the option
     */
    click = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).scrollIntoView().click();
    };

    /**
     * It moves the pointer over the Option
     */
    hover = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).scrollIntoView().trigger('mouseover');
    };
}

export default OptionPageObject;
