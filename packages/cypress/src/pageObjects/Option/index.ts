/// <reference types="cypress" />

export interface IOption {
    click: () => void;
    hover: () => void;
}

/**
 * The Option page object allows to perform actions on the Option component
 * of `react-rainbow-components` library.
 *
 * You will almost never need to use this page object directly. Instead you should
 * use the corresponding `options` property of other page objects, i.e `InternalDropdown`
 * @class
 * @implements {IOption}
 * @type {Option}
 */
class Option implements IOption {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Option.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the option
     * @method
     */
    click(): void {
        cy.get(this.rootElement).scrollIntoView().click();
    }

    /**
     * Trigger `mouseover` event on the option
     * @method
     */
    hover(): void {
        cy.get(this.rootElement).scrollIntoView().trigger('mouseover');
    }
}

export default Option;
