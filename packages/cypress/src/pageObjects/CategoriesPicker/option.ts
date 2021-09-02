/// <reference types="cypress" />

import UniversalPickerOption from '../UniversalPickerOption';

export interface ICategoriesPickerOption {
    clickCloseButton: () => void;
}

/**
 * The CategoriesPickerOption page object allows to perform actions on the options of a CategoriesPicker
 * component.
 *
 * You will almost never need to use this page object directly.
 * Use `CategoriesPicker.options` instead.
 * @class
 * @implements {ICategoriesPickerOption}
 * @type {CategoriesPickerOption}
 */
class CategoriesPickerOption extends UniversalPickerOption implements ICategoriesPickerOption {
    /**
     * Clicks the close button of the option
     * @method
     */
    clickCloseButton(): void {
        cy.get(this.rootElement).find('a').scrollIntoView().click();
    }
}

export default CategoriesPickerOption;
