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
 */
class Option implements IOption {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Option.
     * @example
     * import { Option } from '@rainbow-modules/cypress/pageObjects';
     *
     * const option = new Option('#option-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the option
     * @method
     * @example
     * option.click();
     */
    click(): void {
        cy.get(this.rootElement).scrollIntoView().click();
    }

    /**
     * Trigger `mouseover` event on the option
     * @method
     * @example
     * option.hover();
     */
    hover(): void {
        cy.get(this.rootElement).scrollIntoView().trigger('mouseover');
    }
}

export default Option;
