/// <reference types="cypress" />

import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the tab is active
     * @param active {boolean}
     */
    (chainer: 'active', active: boolean): void;
}

export interface ITab {
    click: () => void;
}

/**
 * The Tab page object allows to perform actions on the Tab component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ITab}
 * @type {Tab}
 */
class Tab implements ITab {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        active: (_: string, active: boolean) => {
            const expected = active ? 'true' : 'false';
            cy.get(`${this.rootElement}`)
                .find('[role="tab"]')
                .should('have.attr', 'data-active', expected);
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
     * Click the tab.
     * @method
     */
    click(): void {
        cy.get(this.rootElement).find('button').click();
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

export default Tab;
