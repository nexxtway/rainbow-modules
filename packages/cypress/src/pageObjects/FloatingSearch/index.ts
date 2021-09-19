/// <reference types="cypress" />

export interface IFloatingSearch {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    clear: () => void;
    close: () => void;
}

/**
 * The FloatingSearch page object allows to perform actions on the FloatingSearch component
 * of `@rainbow-modules/listview` library.
 * @class
 * @implements {IFloatingSearch}
 * @type {FloatingSearch}
 */
class FloatingSearch implements IFloatingSearch {
    private rootElement: string;

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
        cy.get(this.rootElement).find('[data-id="clear-search-value-button"]').click();
    }

    /**
     * Close this FloatingSearch by clicking the close button
     */
    close(): void {
        cy.get(this.rootElement).find('[data-id="button-icon-element"]').click();
    }
}

export default FloatingSearch;
