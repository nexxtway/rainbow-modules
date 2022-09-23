/// <reference types="cypress" />
import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the error passed exists in the input
     * @param error {string}
     */
    (chainer: 'error', error: string): void;
}

export interface IStripeCardInput {
    numberInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    expiryInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    cvcInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    zipInput: Cypress.Chainable<JQuery<HTMLInputElement>>;
    expect: Chainer;
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
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        error: (_: string, error: string) => {
            cy.get(`${this.rootElement} > div[id^="error-message-"]`).should('have.text', error);
        },
    };

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
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: unknown[]) =>
            this.assertMap[chainer](chainer, ...params);
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
