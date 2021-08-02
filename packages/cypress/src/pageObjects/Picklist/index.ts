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
     * @example
     * import { Picklist } from '@rainbow-modules/cypress/pageObjects';
     *
     * const picklist = new Picklist('#picklist-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     * @example
     * // How to get the Picklist dropdown using the input
     * picklist.click();
     * // We need to get the `aria-controls` attribute of the input
     * picklist.input.then($input => {
     *      const ariaControls = $input.attr('aria-controls');
     *      // Use the `aria-controls` value to create a new InternalDropdown page object
     *      const dropdown = new InternalDropdown(`#${ariaControls}`);
     *      // You can use the InternalDropdown page object here
     * })
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="text"]');
    }

    /**
     * Click the input element. Shortcut for `picklist.input.click()`.
     * @method
     * @example
     * picklist.click();
     */
    click(): void {
        this.input.click();
    }

    /**
     * Focus the input element. Shortcut for `picklist.input.focus()`.
     * @method
     * @example
     * picklist.focus();
     */
    focus(): void {
        this.input.focus();
    }
}

export default Picklist;
