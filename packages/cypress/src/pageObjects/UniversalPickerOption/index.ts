/// <reference types="cypress" />

export interface IUniversalPickerOption {
    click: () => void;
    check: () => void;
    uncheck: () => void;
    isChecked: boolean;
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

    /**
     * Check the option
     * @method
     */
    check(): void {
        cy.get(this.rootElement).find('input').check({ force: true });
    }

    /**
     * Uncheck the option
     * @method
     */
    uncheck(): void {
        cy.get(this.rootElement).find('input').uncheck({ force: true });
    }

    get isChecked(): boolean {
        return Cypress.$(`${this.rootElement} input`).prop('checked');
    }
}

export default UniversalPickerOption;
