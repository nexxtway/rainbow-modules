/// <reference types="cypress" />

import { BasePageObject } from '../basePage';

/**
 * Page object to perform operations on Option
 */
class OptionPageObject extends BasePageObject {
    /**
     * Clicks the option
     */
    click = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement.scrollIntoView().click();
    };

    /**
     * It moves the pointer over the Option
     */
    hover = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.rootElement.scrollIntoView().trigger('mouseenter');
    };
}

export default OptionPageObject;
