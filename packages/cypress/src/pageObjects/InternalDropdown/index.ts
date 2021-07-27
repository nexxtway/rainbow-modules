/// <reference types="cypress" />

import OptionPageObject from '../Option';

export interface IInternalDropdown {
    options: OptionPageObject[];
    enterScrollUpArrow: () => void;
    leaveScrollUpArrow: () => void;
    enterScrollDownArrow: () => void;
    leaveScrollDownArrow: () => void;
    getArrowUp: () => Cypress.Chainable<JQuery<HTMLElement>>;
    getArrowDown: () => Cypress.Chainable<JQuery<HTMLElement>>;
    clickSearch: () => void;
    setSearchQuery: (value: string) => void;
}

/**
 * Page object to perform operations on InternalDropdown
 * @type {IInternalDropdown}
 */
class InternalDropdownPageObject implements IInternalDropdown {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of OptionPageObject where each item wraps an option
     */
    get options(): OptionPageObject[] {
        const { length } = Cypress.$(`${this.rootElement} li[role="presentation"]`);
        return Array.from(
            { length },
            (_v, i) =>
                new OptionPageObject(
                    `${this.rootElement} li[role="presentation"]:nth-child(${i + 1})`,
                ),
        );
    }

    /**
     * Simulate `mouseenter` event on the scroll up arrow.
     * @method
     */
    enterScrollUpArrow = (): void => {
        cy.get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseover');
    };

    /**
     * Simulate `mouseleave` event on the scroll up arrow.
     * @method
     */
    leaveScrollUpArrow = (): void => {
        cy.get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseout');
    };

    /**
     * Simulate `mouseenter` event on the scroll down arrow.
     * @method
     */
    enterScrollDownArrow = (): void => {
        cy.get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-down"]')
            .scrollIntoView()
            .trigger('mouseover');
    };

    /**
     * Simulate `mouseleave` event on the scroll down arrow.
     * @method
     */
    leaveScrollDownArrow = (): void => {
        cy.get(this.rootElement)
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
    clickSearch = (): void => {
        cy.get(this.rootElement).get('input[type="search"]').click();
    };

    /**
     * Type in the search input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    setSearchQuery = (value: string): void => {
        cy.get(this.rootElement).get('input[type="search"]').type(value);
    };
}

export default InternalDropdownPageObject;
