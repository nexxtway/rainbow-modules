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
     * @param visible {boolean} - Whether the app message should be visible or not
     */
    (chainer: 'error', error: string): void;
    (chainer: 'value', value: string): void;
}

export interface IRadioGroup {
    inputs: Input[];
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
     * An array of `Input` where each element wraps an option of this radio group.
     * @member {Input[]}
     */
    get inputs(): Input[] {
        const { length } = Cypress.$(`${this.rootElement} [data-id="input-radio_container"]`);
        return Array.from(
            { length },
            (_v, i) => new Input(`${this.rootElement} [data-id="input-radio_container"]:nth(${i})`),
        );
    }
}

export default RadioGroup;
