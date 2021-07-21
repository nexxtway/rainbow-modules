/// <reference types="cypress" />

import InternalDropdownPageObject from '../InternalDropdown';
import { BasePageObject } from '../basePage';

/**
 * Page object to perform operations on Picklist
 */
class PicklistPageObject extends BasePageObject {
    /**
     * Gets the input element.
     * @method
     */
    getInput = (): Cypress.Chainable<JQuery<HTMLInputElement>> => {
        return this.rootElement.get('input[type="text"]');
    };

    /**
     * Clicks the input element.
     * @method
     */
    click = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.getInput().click();
    };

    /**
     * Set focus on the input element.
     * @method
     */
    focus = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.getInput().focus();
    };

    /**
     * Open the dropdown menu. Return a reference to
     * a new `InternalDropdownPageObject` wraping the menu.
     */
    open = (): InternalDropdownPageObject => {
        this.getInput().click();
        return new InternalDropdownPageObject(
            this.rootElement.get('div[role="combobox"][aria-expanded]'),
        );
    };
}

export default PicklistPageObject;
