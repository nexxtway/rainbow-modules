/// <reference types="cypress" />

import UniversalPickerOption from '../UniversalPickerOption';

export interface IUniversalPicker {
    options: UniversalPickerOption[];
    select(index: number): void;
}

/**
 * The UniversalPicker page object allows to perform actions on the UniversalPicker component
 * of `@rainbow-modules/forms` library.
 * @class
 * @implements {IUniversalPicker}
 * @type {UniversalPicker}
 */

class UniversalPicker implements IUniversalPicker {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the UniversalPicker.
     * @example
     * import { UniversalPicker } from '@rainbow-modules/cypress/pageObjects';
     *
     * const universalPicker = new UniversalPicker('#universalpicker-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of UniversalPickerOption page objects where each item wraps an option
     * @member {UniversalPickerOption[]}
     * @example
     * universalPicker.options[0].click();
     */
    get options(): UniversalPickerOption[] {
        const { length } = Cypress.$(`${this.rootElement} div[data-id="universal-picker-option"]`);
        return Array.from(
            { length },
            (_v, i) =>
                new UniversalPickerOption(
                    `${this.rootElement} div[data-id="universal-picker-option"]:nth-child(${
                        i + 1
                    })`,
                ),
        );
    }

    /**
     * Select the option at the provided index.
     * @method
     * @param {number} index - The index of the option to select.
     * @example
     * universalPicker.select(0);
     */
    select(index: number): void {
        const option = this.options[index];
        if (!option.isChecked) option.check();
    }
}

export default UniversalPicker;
