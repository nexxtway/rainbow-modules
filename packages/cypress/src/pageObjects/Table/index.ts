/// <reference types="cypress" />
import Row from './row';

export interface ITable {
    getRow: (rowIndex: number) => Row;
    checkRow: (rowIndex: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    uncheckRow: (rowIndex: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    checkAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
    uncheckAll: () => Cypress.Chainable<JQuery<HTMLElement>>;
    clickHeader: (columnIndex: number) => Cypress.Chainable<JQuery<HTMLElement>>;
}

/**
 * Page object to perform operations on Table
 * @type {ITable}
 */
class Table implements ITable {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Get a new Row page object wrapping the row on the provided index.
     * @param rowIndex The index of the desired row
     * @returns {Row}
     */
    getRow = (rowNumber: number): Row => {
        return new Row(`${this.rootElement} tbody tr:nth-child(${rowNumber})`);
    };

    /**
     * Shortcut to check a row. Same as `Table.getRow(index).check()`
     * @param rowIndex The index of the desired row
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    checkRow = (rowNumber: number): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.getRow(rowNumber).check();
    };

    /**
     * Shortcut to uncheck a row. Same as `Table.getRow(index).uncheck()`
     * @param rowIndex The index of the desired row
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    uncheckRow = (rowNumber: number): Cypress.Chainable<JQuery<HTMLElement>> => {
        return this.getRow(rowNumber).uncheck();
    };

    /**
     * Check all the rows.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    checkAll = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).find(`thead > tr input`).check();
    };

    /**
     * Uncheck all the rows.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    uncheckAll = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).find(`thead > tr input`).uncheck();
    };

    /**
     * Click the header of the column given by `columnIndex`.
     * @param columnIndex The index of the column to click
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    clickHeader = (columnNumber: number): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(this.rootElement)
            .find(`thead > tr > th:nth-child(${columnNumber})`)
            .find('.rainbow-table_header-container')
            .click();
    };
}

export default Table;
