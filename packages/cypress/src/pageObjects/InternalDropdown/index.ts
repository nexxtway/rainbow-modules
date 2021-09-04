/// <reference types="cypress" />

import Option from '../Option';

export interface IInternalDropdown {
    options: Option[];
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
 * The InternalDropdown page object allows to perform actions on the InternalDropdown component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IInternalDropdown}
 * @type {InternalDropdown}
 */
class InternalDropdown implements IInternalDropdown {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the InternalDropdown.
     * @example
     * import { InternalDropdown } from '@rainbow-modules/cypress/pageObjects';
     *
     * const dropdown = new InternalDropdown('#dropdown-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of `Option` page objects where each item wraps an option of this dropdown
     * @member {Option[]}
     */
    get options(): Option[] {
        const { length } = Cypress.$(`${this.rootElement} li[role="presentation"]`);
        return Array.from(
            { length },
            (_v, i) =>
                new Option(`${this.rootElement} li[role="presentation"]:nth-child(${i + 1})`),
        );
    }

    /**
     * Assert that an option exists.
     *
     * Useful when the options are loaded asynchronously and want to wait for them to load.
     * @method
     */
    waitForOption(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy
            .get(`${this.rootElement} li[role="presentation"]:nth-child(${index + 1})`)
            .should('exist');
    }

    /**
     * Simulate `mouseenter` event on the scroll up arrow.
     * @method
     */
    enterScrollUpArrow(): void {
        cy.get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseover');
    }

    /**
     * Simulate `mouseleave` event on the scroll up arrow.
     * @method
     */
    leaveScrollUpArrow(): void {
        cy.get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseout');
    }

    /**
     * Simulate `mouseenter` event on the scroll down arrow.
     * @method
     */
    enterScrollDownArrow(): void {
        cy.get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-down"]')
            .scrollIntoView()
            .trigger('mouseover');
    }

    /**
     * Simulate `mouseleave` event on the scroll down arrow.
     * @method
     */
    leaveScrollDownArrow(): void {
        cy.get(this.rootElement)
            .find('[data-id="internal-dropdown-arrow-down"]')
            .scrollIntoView()
            .trigger('mouseout');
    }

    /**
     * Get the arrow up element
     * @method
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getArrowUp(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.rootElement).get('[data-id="internal-dropdown-arrow-up"]');
    }

    /**
     * Get the arrow down element
     * @method
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getArrowDown(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.rootElement).get('[data-id="internal-dropdown-arrow-down"]');
    }

    /**
     * Click the search input element.
     *
     * NOTE: Fails if search is not enabled on the dropdown.
     * @method
     */
    clickSearch(): void {
        cy.get(this.rootElement).get('input[type="search"]').click();
    }

    /**
     * Type in the search input element.
     *
     * NOTE: Fails if search is not enabled on the dropdown.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    setSearchQuery(value: string): void {
        cy.get(this.rootElement).get('input[type="search"]').type(value);
    }
}

export default InternalDropdown;
