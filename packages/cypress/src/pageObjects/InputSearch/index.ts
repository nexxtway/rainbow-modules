/// <reference types="cypress" />

import { AssertMap } from '../types';

interface Chainer {
    /**
     * Asserts if the visibility of the search input match the provided value
     * @param visible {boolean} - Whether the app message should be visible or not
     */
    (chainer: 'visible', visible: boolean): void;
}

export interface IInputSearch {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    clear: () => void;
    search: () => void;
    expect: Chainer;
}

/**
 * The InputSearch page object allows to perform actions on the InputSearch component
 * of `@rainbow-modules/search` library.
 * @class
 * @implements {IFloatingSearch}
 * @type {FloatingSearch}
 */
class InputSearch implements IInputSearch {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        visible: (_: string, visible: boolean) => {
            if (visible) {
                this.input.should('be.visible');
            } else {
                this.input.should('not.be.visible');
            }
        },
    };

    /**
     * Constructs a new instance of this page object.
     * @param rootElement The selector for the root element of the Button.
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
     * Clear the search input
     */
    clear(): void {
        cy.get(this.rootElement).find('[data-id="button-icon-element"]').click();
    }

    /**
     * Trigger the search event when variant is default
     */
    search(): void {
        this.input.type('{enter}');
    }

    /**
     * Execute an assertion on this page object
     */
    get expect(): Chainer {
        return (chainer: string, ...params: any[]) => this.assertMap[chainer](chainer, ...params);
    }
}

export default InputSearch;
