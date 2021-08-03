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
 * The Table page object allows to perform actions on the Table component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ITable}
 * @type {Table}
 */
class Table implements ITable {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Table.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Get a new Row page object wrapping the row on the provided position.
     * @method
     * @param rowNumber The number of the desired row, starting at 1
     * @returns {Row}
     */
    getRow(rowNumber: number): Row {
        return new Row(`${this.rootElement} tbody tr:nth-child(${rowNumber})`);
    }

    /**
     * Shortcut to check a row. Same as `Table.getRow(rowNumber).check()`
     *
     * Fails if the checkbox column is not present.
     * @method
     * @param rowNumber The number of the desired row, starting at 1
     */
    checkRow(rowNumber: number): void {
        this.getRow(rowNumber).check();
    }

    /**
     * Shortcut to uncheck a row. Same as `Table.getRow(rowNumber).uncheck()`
     *
     * Fails if the checkbox column is not present.
     * @method
     * @param rowNumber The number of the desired row, starting at 1
     */
    uncheckRow(rowNumber: number): void {
        this.getRow(rowNumber).uncheck();
    }

    /**
     * Check all the rows.
     *
     * Fails if the checkbox column is not present.
     * @method
     */
    checkAll(): void {
        cy.get(this.rootElement).find(`thead > tr input`).check();
    }

    /**
     * Uncheck all the rows.
     *
     * Fails if the checkbox column is not present.
     * @method
     */
    uncheckAll(): void {
        cy.get(this.rootElement).find(`thead > tr input`).uncheck();
    }

    /**
     * Click the header of the column given by `columnNumber`.
     * @method
     * @param columnNumber The number of the column to click, starting at 1
     */
    clickHeader(columnNumber: number): void {
        cy.get(this.rootElement)
            .find(`thead > tr > th:nth-child(${columnNumber})`)
            .find('.rainbow-table_header-container')
            .click();
    }
}

export default Table;
