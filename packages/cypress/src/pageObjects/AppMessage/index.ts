/// <reference types="cypress" />
export interface IAppMessage {
    shouldHaveMessage(message: string): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldBeVisible(): Cypress.Chainable<JQuery<HTMLElement>>;
    shouldBeHidden(): Cypress.Chainable<JQuery<HTMLElement>>;
    closeButton: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * The AppMessage page object allows to perform actions on the AppMessage component
 * of `@rainbow-modules/app` library.
 * @class
 * @implements {IAppMessage}
 * @type {AppMessage}
 */
class AppMessage implements IAppMessage {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object.
     * @param rootElement The selector for the root element of the Button.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Asserts if the message passed is the current app message
     * @method
     * @param {string} error - The message text, that must match the current app message
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shouldHaveMessage(message: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy
            .get(`${this.rootElement}`)
            .find('[data-cy="app-message-text"]')
            .should('have.text', message);
    }

    /**
     * Asserts if this app message is visible
     * @method
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shouldBeVisible(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.rootElement).should('exist').should('be.visible');
    }

    /**
     * Asserts if this app message is not visible
     * @method
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    shouldBeHidden(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.rootElement).should('not.exist');
    }

    /**
     * Get the close button of the app message
     * @method
     * @returns {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     */
    get closeButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy
            .get(this.rootElement)
            .find<HTMLButtonElement>('button[data-id="button-icon-element"]')
            .first();
    }
}

export default AppMessage;
