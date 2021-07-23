/// <reference types="cypress" />

import UniversalPickerOption from '../UniversalPickerOption';

export interface IUniversalPicker {
    getOption(index: number): UniversalPickerOption;
}

/**
 * Page object to perform operations on Picklist
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
     * Returns a new country option page object wraping the item at the
     * provided index.
     * @method
     * @param {number} index - The index of the option to return.
     * @returns {UniversalPickerOption} The new Option page object
     */
    getOption = (index: number): UniversalPickerOption => {
        return new UniversalPickerOption(`${this.rootElement} div:nth-child(${index}) > label`);
    };
}

export default UniversalPicker;
