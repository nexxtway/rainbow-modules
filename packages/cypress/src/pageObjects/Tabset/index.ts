/// <reference types="cypress" />

import Tab from './tab';
import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the tabset exist in the DOM
     * @param exist {boolean}
     */
    (chainer: 'exist', exist: boolean): void;
}

export interface ITabset {
    getTab: (index: number) => Tab;
    scrollLeftButton: Cypress.Chainable<JQuery<HTMLButtonElement>>;
    scrollRightButton: Cypress.Chainable<JQuery<HTMLButtonElement>>;
}

/**
 * The Tabset page object allows to perform actions on the Tabset component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ITabset}
 * @type {Tabset}
 */
class Tabset implements ITabset {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        exist: (_: string, exist: boolean) => {
            if (exist) {
                cy.get(`${this.rootElement}`).should('exist');
            } else {
                cy.get(`${this.rootElement}`).should('not.exist');
            }
        },
    };

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Sidebar.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Get a Tab page object wrapping the `index + 1` option
     * @method
     * @param {number} index - The tab index, starting at 0 for the first tab
     * @returns {Tab}
     */
    getTab(index: number): Tab {
        return new Tab(
            `${this.rootElement} ul[role="tablist"] li[role="presentation"]:nth-child(${
                index + 1
            })`,
        );
    }

    /**
     * Get then scroll left button
     * @member {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     */
    get scrollLeftButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy
            .get(this.rootElement)
            .find('div[role="group"] > button')
            .first() as Cypress.Chainable<JQuery<HTMLButtonElement>>;
    }

    /**
     * Get then scroll right button
     * @member {Cypress.Chainable<JQuery<HTMLButtonElement>>}
     */
    get scrollRightButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy
            .get(this.rootElement)
            .find('div[role="group"] > button')
            .last() as Cypress.Chainable<JQuery<HTMLButtonElement>>;
    }

    /**
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: any[]) => this.assertMap[chainer](chainer, ...params);
    }
}

export default Tabset;
