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

export interface IInput {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    expect: Chainer;
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
     * Gets the input element.
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input');
    }

    /**
     * Check the input when type is `checkbox` or `radio`
     *
     * Same as `inputPageObject.input.check()`
     * @method
     */
    check(): void {
        // TODO: verify if it is already checked before check it
        cy.get(this.rootElement).find('label').click('left');
    }

    /**
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: any[]) => this.assertMap[chainer](chainer, ...params);
    }
}

export default Input;
