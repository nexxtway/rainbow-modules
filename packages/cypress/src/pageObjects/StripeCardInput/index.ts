/// <reference types="cypress" />
export interface IStripeCardInput {
    numberInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    expiryInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    cvcInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    zipInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    shouldHaveError(error: string): void;
    clear(): void;
}

/**
 * The StripeCardInput page object allows to perform actions on the StripeCardInput component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IStripeCardInput}
 * @type {StripeCardInput}
 */
class StripeCardInput implements IStripeCardInput {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Input.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the iframe where the stripe component is rendered.
     *
     * Internally asserts that the component loaded correctly.
     * @member {Cypress.Chainable<JQuery<HTMLIFrameElement>>}
     * @private
     */
    private get iframe(): Cypress.Chainable<JQuery<HTMLIFrameElement>> {
        return cy
            .get(this.rootElement)
            .find('iframe')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap) as Cypress.Chainable<JQuery<HTMLIFrameElement>>;
    }

    /**
     * Gets the card number input
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get numberInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return this.iframe.find('input[data-elements-stable-field-name="cardNumber"]');
    }

    /**
     * Gets the expiry input
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get expiryInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return this.iframe.find('input[data-elements-stable-field-name="cardExpiry"]');
    }

    /**
     * Gets the CVC input
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get cvcInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return this.iframe.find('input[data-elements-stable-field-name="cardCvc"]');
    }

    /**
     * Gets the postal code input
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get zipInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return this.iframe.find('input[data-elements-stable-field-name="postalCode"]');
    }

    /**
     * Asserts if the error passed exists in the input
     * @method
     * @param {string} error - The error text, that must match the current error to pass the assertion
     */
    shouldHaveError(error: string): void {
        cy.get(`${this.rootElement} > div[id^="error-message-"]`).should('have.text', error);
    }

    /**
     * Clears the input
     * @method
     */
    clear(): void {
        this.numberInput.clear();
        this.expiryInput.clear();
        this.cvcInput.clear();
        this.zipInput.clear();
    }
}

export default StripeCardInput;
