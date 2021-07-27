/// <reference types="cypress" />

export interface IUniversalPickerOption {
    click: () => void;
}

/**
 * Page object to perform operations on a universal picker option
 * @type {IUniversalPickerOption}
 */
class UniversalPickerOption implements IUniversalPickerOption {
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
    click(): void {
        cy.get(this.rootElement).scrollIntoView().click();
    }
}

export default UniversalPickerOption;
