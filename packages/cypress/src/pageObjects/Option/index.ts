/// <reference types="cypress" />

export interface IOption {
    click: () => void;
    hover: () => void;
}

/**
 * Page object to perform operations on Option
 * @type {IOption}
 */
class OptionPageObject implements IOption {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the option
     * @method
     */
    click = (): void => {
        cy.get(this.rootElement).scrollIntoView().click();
    };

    /**
     * Trigger `mouseover` event on the option
     * @method
     */
    hover = (): void => {
        cy.get(this.rootElement).scrollIntoView().trigger('mouseover');
    };
}

export default OptionPageObject;
