/// <reference types="cypress" />

export interface IUniversalPickerOption {
    click: () => void;
    check: () => void;
    uncheck: () => void;
    isChecked: boolean;
}

/**
 * The UniversalPickerOption page object allows to perform actions on
 * UniversalPickerOption component of `@rainbow-modules/forms` library.
 *
 * You will almost never need to use this page object directly.
 * Use `UniversalPicker.options` instead.
 * @class
 * @implements {UniversalPickerOption}
 * @type {UniversalPickerOption}
 */
class UniversalPickerOption implements IUniversalPickerOption {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the UniversalPickerOption.
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

    /**
     * Whether this option is checked or not.
     * @member
     * @readonly
     */
    get isChecked(): boolean {
        return Cypress.$(`${this.rootElement} input`).prop('checked');
    }
}

export default UniversalPickerOption;
