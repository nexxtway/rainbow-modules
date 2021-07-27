/// <reference types="cypress" />

import UniversalPickerOption from '../UniversalPickerOption';

export interface IUniversalPicker {
    options: UniversalPickerOption[];
    select(index: number): void;
}

/**
 * Page object to perform operations on UniversalPicker
 * @type {IUniversalPicker}
 */

class UniversalPicker implements IUniversalPicker {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of UniversalPickerOption page objects where each item wraps an option
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
     * Select the option at the
     * provided index.
     * @method
     * @param {number} index - The index of the option to select.
     */
    select(index: number): void {
        const option = this.options[index];
        if (!option.isChecked) option.check();
    }
}

export default UniversalPicker;
