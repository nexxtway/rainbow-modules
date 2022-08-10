/// <reference types="cypress" />

import InternalDropdown from '../InternalDropdown';
import Option from '../Option';
import { AssertMap } from '../types';

/**
 * @interface Chainer
 */
interface Chainer {
    /**
     * Asserts if the Picklist is open
     */
    (chainer: 'open', open: boolean): void;
}

export interface IPicklist {
    input: Cypress.Chainable<JQuery<HTMLInputElement>>;
    getOption: (index: number) => Option;
    click: () => void;
    focus: () => void;
    expect: Chainer;
}
/**
 * The Picklist page object allows to perform actions on the Picklist component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IPicklist}
 * @type {Picklist}
 */
class Picklist implements IPicklist {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        open: (_: string, open: boolean) => {
            const attr = open ? 'true' : 'false';
            cy.get(`${this.rootElement} div[role="combobox"]`).should(
                'have.attr',
                'aria-expanded',
                attr,
            );
        },
    };

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Picklist.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element
     * @member {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input[type="text"]');
    }

    /**
     * Click the input element. Shortcut for `picklist.input.click()`.
     * @method
     */
    click(): void {
        this.input.click();
    }

    /**
     * Focus the input element. Shortcut for `picklist.input.focus()`.
     * @method
     */
    focus(): void {
        this.input.focus();
    }

    /**
     * Get an Option page object wrapping the `index + 1` option
     * @method
     * @param {number} index - The option index, starting at 0 for the first option
     * @returns {Option}
     */
    getOption(index: number): Option {
        const ariaControls = Cypress.$(`${this.rootElement} input`).attr('aria-controls');
        const dropdown = new InternalDropdown(`#${ariaControls}`);
        return dropdown.getOption(index);
    }

    /**
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: unknown[]) =>
            this.assertMap[chainer](chainer, ...params);
    }
}

export default Picklist;
