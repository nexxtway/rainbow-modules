/// <reference types="cypress" />

export interface IInputSearch {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    clear: () => void;
    search: () => void;
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
}

export default InputSearch;
