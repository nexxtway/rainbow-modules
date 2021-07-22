/// <reference types="cypress" />

import OptionPageObject from '../Option';

export interface IInternalDropdownPageObject {
    enterScrollUpArrow: () => Cypress.Chainable<JQuery<HTMLElement>>;
    leaveScrollUpArrow: () => Cypress.Chainable<JQuery<HTMLElement>>;
    enterScrollDownArrow: () => Cypress.Chainable<JQuery<HTMLElement>>;
    leaveScrollDownArrow: () => Cypress.Chainable<JQuery<HTMLElement>>;
    getArrowUp: () => Cypress.Chainable<JQuery<HTMLElement>>;
    getArrowDown: () => Cypress.Chainable<JQuery<HTMLElement>>;
    clickSearch: () => Cypress.Chainable<JQuery<HTMLElement>>;
    setSearchQuery: (value: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    getOptionsLength: () => number;
    getOption: (index: number) => OptionPageObject;
}

/**
 * Page object to perform operations on InternalDropdown
 * @type {IInternalDropdownPageObject}
 */
class InternalDropdownPageObject implements IInternalDropdownPageObject {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Simulate `mouseenter` event on the scroll up arrow.
     * @method
     */
    enterScrollUpArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseover');
    };

    /**
     * Simulate `mouseleave` event on the scroll up arrow.
     * @method
     */
    leaveScrollUpArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseout');
    };

    /**
     * Simulate `mouseenter` event on the scroll down arrow.
     * @method
     */
    enterScrollDownArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-down"]')
            .scrollIntoView()
            .trigger('mouseover');
    };

    /**
     * Simulate `mouseleave` event on the scroll down arrow.
     * @method
     */
    leaveScrollDownArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-down"]')
            .scrollIntoView()
            .trigger('mouseout');
    };

    /**
     * Get the arrow up element
     * @method
     */
    getArrowUp = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).get('[data-id="internal-dropdown-arrow-up"]');
    };

    /**
     * Get the arrow down element
     * @method
     */
    getArrowDown = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).get('[data-id="internal-dropdown-arrow-down"]');
    };

    /**
     * Click the search input element.
     * @method
     */
    clickSearch = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).get('input[type="search"]').click();
    };

    /**
     * Type in the search input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    setSearchQuery = (value: string): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).get('input[type="search"]').type(value);
    };

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    getOptionsLength = (): number => {
        return cy.get(this.rootElement).$$('li[role="presentation"]').length;
    };

    /**
     * Returns a new OptionPageObject wraping the option in the
     * provided index.
     * @method
     * @param {number} index - The index of the option to return.
     * @returns {OptionPageObject} The new Option page object
     */
    getOption = (index: number): OptionPageObject => {
        return new OptionPageObject(
            `${this.rootElement} li[role="presentation"]:nth-child(${index})`,
        );
    };
}

export default InternalDropdownPageObject;
