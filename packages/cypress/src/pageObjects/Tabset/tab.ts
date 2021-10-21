/// <reference types="cypress" />

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
}

export default Tab;
