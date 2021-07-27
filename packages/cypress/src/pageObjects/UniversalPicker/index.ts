/// <reference types="cypress" />

import UniversalPickerOption from '../UniversalPickerOption';

export interface IUniversalPicker {
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
     * Select the option at the
     * provided index.
     * @method
     * @param {number} index - The index of the option to select.
     */
    select(index: number): void {
        // TODO: check if it is already selected before select
        const option = new UniversalPickerOption(
            `${this.rootElement} div[data-id="universal-picker-option"]:nth-child(${
                index + 1
            }) > label`,
        );
        option.click();
    }
}

export default UniversalPicker;
