/// <reference types="cypress" />

import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the error passed exists in the Textarea
     * @param error {string}
     */
    (chainer: 'error', error: string): void;
}

export interface ITextarea {
    input: Cypress.Chainable<JQuery<HTMLTextAreaElement>>;
    expect: Chainer;
}

/**
 * The Textarea page object allows to perform actions on the Textarea component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ITextarea}
 * @type {Textarea}
 */
class Textarea implements ITextarea {
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
     * @param rootElement The selector for the root element of the Textarea.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the Textarea element.
     * @member {Cypress.Chainable<JQuery<HTMLTextAreaElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLTextAreaElement>> {
        return cy.get(this.rootElement).find('textarea');
    }

    /**
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: any[]) => this.assertMap[chainer](chainer, ...params);
    }
}

export default Textarea;
