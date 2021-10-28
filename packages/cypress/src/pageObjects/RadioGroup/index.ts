/// <reference types="cypress" />

import Input from '../Input';
import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the error passed exists in the input
     * @param error {string}
     */
    (chainer: 'error', error: string): void;
    /**
     * Asserts if the value passed matches the value of the selected radio
     * @param value {string}
     */
    (chainer: 'value', value: string): void;
}

export interface IRadioGroup {
    getInput: (index: number) => Input;
    expect: Chainer;
}

/**
 * The RadioGroup page object allows to perform actions on the RadioGroup component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IRadioGroup}
 * @type {RadioGroup}
 */
class RadioGroup implements IRadioGroup {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        error: (_: string, error: string) => {
            cy.get(`${this.rootElement} > div[id^="error-message-"]`).should('have.text', error);
        },
        value: (_: string, value: string) => {
            cy.get(`${this.rootElement}`).find(`input[value="${value}"]`).should('be.checked');
        },
    };

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Input.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: any[]) => this.assertMap[chainer](chainer, ...params);
    }

    /**
     * Get an Input page object wrapping the `index + 1` radio input
     * @method
     * @param {number} index - The radio input index, starting at 0 for the first one
     * @returns {Input}
     */
    getInput(index: number): Input {
        return new Input(`${this.rootElement} [data-id="input-radio_container"]:nth(${index})`);
    }
}

export default RadioGroup;
