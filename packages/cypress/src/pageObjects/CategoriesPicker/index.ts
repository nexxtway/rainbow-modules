/// <reference types="cypress" />

import UniversalPicker from '../UniversalPicker';
import CategoriesPickerOption from './option';

export interface ICategoriesPicker {
    picker: UniversalPicker;
    options: CategoriesPickerOption[];
}

/**
 * The CategoriesPicker page object allows to perform actions on the CategoriesPicker component
 * of `@rainbow-modules/search` library.
 * @class
 * @implements {ICategoriesPicker}
 * @type {CategoriesPicker}
 */
class CategoriesPicker implements ICategoriesPicker {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the CategoriesPicker.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the underlying UniversalPicker
     * @member {UniversalPicker}
     */
    get picker(): UniversalPicker {
        return new UniversalPicker(`${this.rootElement} > fieldset`);
    }

    /**
     * Array of CategoriesPickerOption page objects where each item wraps an option
     * @member {CategoriesPickerOption[]}
     */
    get options(): CategoriesPickerOption[] {
        const { length } = Cypress.$(`${this.rootElement} div[data-id="universal-picker-option"]`);
        return Array.from(
            { length },
            (_v, i) =>
                new CategoriesPickerOption(
                    `${this.rootElement} div[data-id="universal-picker-option"]:nth-child(${
                        i + 1
                    })`,
                ),
        );
    }
}

export default CategoriesPicker;
