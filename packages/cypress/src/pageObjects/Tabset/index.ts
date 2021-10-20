/// <reference types="cypress" />

import Tab from './tab';

export interface ITabset {
    tabs: Tab[];
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
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Sidebar.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of Tab page objects where each item wraps a tab of the tabset
     * @member {Tab[]}
     */
    get tabs(): Tab[] {
        const { length } = Cypress.$(`${this.rootElement} li[role="presentation"]`);
        return Array.from(
            { length },
            (_v, i) =>
                new Tab(
                    `${this.rootElement} ul[role="tablist"] li[role="presentation"]:nth-child(${
                        i + 1
                    })`,
                ),
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
}

export default Tabset;
