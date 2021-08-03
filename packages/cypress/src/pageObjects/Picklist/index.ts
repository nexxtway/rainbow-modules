/// <reference types="cypress" />

export interface IPicklist {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    click: () => void;
    focus: () => void;
}
/**
 * The Picklist page object allows to perform actions on the Picklist component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IPicklist}
 * @type {Picklist}
 */
class Picklist implements IPicklist {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Picklist.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="text"]');
    }

    /**
     * Click the input element. Shortcut for `picklist.input.click()`.
     * @method
     */
    click(): void {
        this.input.click();
    }

    /**
     * Focus the input element. Shortcut for `picklist.input.focus()`.
     * @method
     */
    focus(): void {
        this.input.focus();
    }
}

export default Picklist;
