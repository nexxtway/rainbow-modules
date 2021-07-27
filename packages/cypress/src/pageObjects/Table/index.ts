/// <reference types="cypress" />
import Row from './row';

export interface ITable {
    getRow: (rowIndex: number) => Row;
    checkRow: (rowIndex: number) => void;
    uncheckRow: (rowIndex: number) => void;
    checkAll: () => void;
    uncheckAll: () => void;
    clickHeader: (columnIndex: number) => void;
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
     * @method
     * @param rowIndex The number of the desired row
     * @returns {Row}
     */
    getRow = (rowNumber: number): Row => {
        return new Row(`${this.rootElement} tbody tr:nth-child(${rowNumber})`);
    };

    /**
     * Shortcut to check a row. Same as `Table.getRow(index).check()`
     * @method
     * @param rowNumber The number of the desired row
     */
    checkRow = (rowNumber: number): void => {
        this.getRow(rowNumber).check();
    };

    /**
     * Shortcut to uncheck a row. Same as `Table.getRow(index).uncheck()`
     * @method
     * @param rowNumber The number of the desired row
     */
    uncheckRow = (rowNumber: number): void => {
        this.getRow(rowNumber).uncheck();
    };

    /**
     * Check all the rows.
     * @method
     */
    checkAll = (): void => {
        cy.get(this.rootElement).find(`thead > tr input`).check();
    };

    /**
     * Uncheck all the rows.
     * @method
     */
    uncheckAll = (): void => {
        cy.get(this.rootElement).find(`thead > tr input`).uncheck();
    };

    /**
     * Click the header of the column given by `columnNumber`.
     * @method
     * @param columnNumber The number of the column to click
     */
    clickHeader = (columnNumber: number): void => {
        cy.get(this.rootElement)
            .find(`thead > tr > th:nth-child(${columnNumber})`)
            .find('.rainbow-table_header-container')
            .click();
    };
}

export default Table;
