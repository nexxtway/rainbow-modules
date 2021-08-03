/// <reference types="cypress" />

import ButtonMenu from '../ButtonMenu';

export interface IRow {
    check: () => void;
    uncheck: () => void;
    getButtonMenu: (actionColumnIndex: number) => ButtonMenu;
}

/**
 * The Row page object allows to perform actions on a row of the table component
 * of `react-rainbow-components` library.
 *
 * You will almost never need to use this page object directly.
 * Use `Table.getRow` instead.
 * @class
 * @implements {IRow}
 * @type {Row}
 */
class Row implements IRow {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Row.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Check this row
     *
     * Fails if the checkbox column is not present.
     * @method
     */
    check(): void {
        cy.get(this.rootElement)
            .find('input[type="checkbox"], input[type="radio"]')
            .check({ force: true });
    }

    /**
     * Uncheck this row
     *
     * Fails if the checkbox column is not present.
     * @method
     */
    uncheck(): void {
        cy.get(this.rootElement)
            .find('input[type="checkbox"], input[type="radio"]')
            .uncheck({ force: true });
    }

    /**
     * Get a new ButtonMenu page object wrapping this row actions
     * @method
     * @param actionColumnNumber The number of the actions column, starting at 1
     * @returns {ButtonMenu}
     */
    getButtonMenu(actionColumnNumber: number): ButtonMenu {
        return new ButtonMenu(`${this.rootElement} td:nth-child(${actionColumnNumber}) > div`);
    }
}

export default Row;
