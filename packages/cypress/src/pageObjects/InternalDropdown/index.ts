/// <reference types="cypress" />

import { BasePageObject } from '../basePage';
import OptionPageObject from '../Option';

/**
 * Page object to perform operations on InternalDropdown
 */
class InternalDropdownPageObject extends BasePageObject {
    /**
     * Simulate `mouseenter` event on the scroll up arrow.
     * @method
     */
    enterScrollUpArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement
            .get('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseenter');
    };

    /**
     * Simulate `mouseleave` event on the scroll up arrow.
     * @method
     */
    leaveScrollUpArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement
            .get('[data-id="internal-dropdown-arrow-up"]')
            .scrollIntoView()
            .trigger('mouseleave');
    };

    /**
     * Simulate `mouseenter` event on the scroll down arrow.
     * @method
     */
    enterScrollDownArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement
            .get('[data-id="internal-dropdown-arrow-down"]')
            .scrollIntoView()
            .trigger('mouseenter');
    };

    /**
     * Simulate `mouseleave` event on the scroll down arrow.
     * @method
     */
    leaveScrollDownArrow = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement
            .get('[data-id="internal-dropdown-arrow-down"]')
            .scrollIntoView()
            .trigger('mouseleave');
    };

    /**
     * Get the arrow up element
     * @method
     */
    getArrowUp = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement.get('[data-id="internal-dropdown-arrow-up"]');
    };

    /**
     * Get the arrow down element
     * @method
     */
    getArrowDown = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement.get('[data-id="internal-dropdown-arrow-down"]');
    };

    /**
     * Click the search input element.
     * @method
     */
    clickSearch = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement.get('input[type="search"]').click();
    };

    /**
     * Type in the search input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    setSearchQuery = (value: string): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement.get('input[type="search"]').type(value);
    };

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    getOptionsLength = (): number => {
        return this.rootElement.$$('li[role="presentation"]').length;
    };

    /**
     * Returns a new OptionPageObject wraping the option in the
     * provided index.
     * @method
     * @param {number} index - The index of the option to return.
     */
    getOption = (index: number): OptionPageObject | null => {
        const activeOptions = this.rootElement.$$('li[role="presentation"]');
        const option = activeOptions[index];
        if (option) {
            return new OptionPageObject(cy.wrap(option));
        }
        return null;
    };
}

export default InternalDropdownPageObject;
