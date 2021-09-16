/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="cypress" />

import { AssertMap } from '../../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the visibility of the app message match the provided value
     * @param visible {boolean} - Whether the app message should be visible or not
     */
    (chainer: 'visible', visible: boolean): void;
    /**
     * Asserts if the message of the app message match the provided value
     * @param message {string} - The message to match
     */
    (chainer: 'message', message: string): void;
    /**
     * Asserts if the variant of the app message match the provided value
     * @param message {string} - The message to match
     */
    (chainer: 'variant', variant: string): void;
}

export interface IAppMessage {
    close: () => void;
    expect: Chainer;
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
     * Close the app message
     * @method
     */
    close(): void {
        cy.get(this.rootElement)
            .find<HTMLButtonElement>('button[data-id="button-icon-element"]')
            .first()
            .click();
    }

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        visible: (_: string, visible: boolean) => {
            if (visible) {
                cy.get(this.rootElement).should('exist').should('be.visible');
            } else {
                cy.get(this.rootElement).should('not.exist');
            }
        },
        message: (_: string, message: string) => {
            cy.get(`${this.rootElement}`)
                .find('[data-cy="app-message-text"]')
                .should('have.text', message);
        },
        variant: (_: string, variant: string) => {
            cy.get(`${this.rootElement}`).should('have.attr', 'data-variant', variant);
        },
    };

    /**
     * Execute an assertion on this page object
     */
    get expect(): Chainer {
        return (chainer: string, ...params: any[]) => this.assertMap[chainer](chainer, ...params);
    }
}

export default AppMessage;
