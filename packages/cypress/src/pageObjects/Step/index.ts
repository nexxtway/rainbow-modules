/// <reference types="cypress" />

import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the step header matches the provided text
     * @param text {string}
     */
    (chainer: 'header', text: string): void;
    /**
     * Asserts if the step description matches the provided text
     * @param text {string}
     */
    (chainer: 'description', text: string): void;
}

export interface IStep {
    expect: Chainer;
}

/**
 * The Step page object allows to perform actions on the Step component
 * of `@rainbow-modules/content` library.
 * @class
 * @implements {IStep}
 * @type {Step}
 */
class Step implements IStep {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        header: (_: string, text: string) => {
            cy.get(`${this.rootElement} [data-cy="step-header"]`).should('have.text', text);
        },
        description: (_: string, text: string) => {
            cy.get(`${this.rootElement} [data-cy="step-description"]`).should('have.text', text);
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
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: unknown[]) =>
            this.assertMap[chainer](chainer, ...params);
    }
}

export default Step;
