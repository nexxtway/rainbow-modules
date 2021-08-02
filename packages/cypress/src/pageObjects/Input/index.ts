/// <reference types="cypress" />
export interface IInput {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    shouldHaveError(error: string): void;
    check(): void;
}

/**
 * The Input page object allows to perform actions on the Input component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IInput}
 * @type {Input}
 */
class Input implements IInput {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Input.
     * @example
     * import { Input } from '@rainbow-modules/cypress/pageObjects';
     *
     * const inputPageObject = new Input('#input-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element.
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     * @example
     * // Write some text on the input
     * inputPageObject.input.type('Hello world!');
     * // Clear the value of an input or textarea
     * inputPageObject.input.clear();
     * // Focus the input
     * inputPageObject.input.focus();
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input');
    }

    /**
     * Asserts if the error passed exists in the input
     * @method
     * @param {string} error - The error text, that must match the current error to pass the assertion
     * @example
     * // The test will fail if there is no error or if the error text is different to the provided string
     * inputPageObject.shouldHaveError('This field is required');
     */
    shouldHaveError(error: string): void {
        cy.get(`${this.rootElement} > div[id^="error-message-"]`).should('have.text', error);
    }

    /**
     * Check the input when type is `checkbox` or `radio`
     *
     * Same as `inputPageObject.input.check()`
     * @method
     * @example
     * inputPageObject.check();
     */
    check(): void {
        // TODO: verify if it is already checked before check it
        cy.get(this.rootElement).find('label').click('left');
    }
}

export default Input;
