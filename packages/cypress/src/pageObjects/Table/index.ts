/// <reference types="cypress" />
import { AssertMap } from '../types';
import Row from './row';

interface Chainer {
    /**
     * Asserts if the table is loading
     * @param loading {boolean} - Whether the table should be loading or not
     */
    (chainer: 'loading', loading: boolean): void;
    /**
     * Asserts the row count of the table
     * @param count {number} - The row count the table should have
     */
    (chainer: 'rows', count: number): void;
}

export interface ITable {
    getRow: (rowIndex: number) => Row;
    checkRow: (rowIndex: number) => void;
    uncheckRow: (rowIndex: number) => void;
    checkAll: () => void;
    uncheckAll: () => void;
    clickHeader: (columnIndex: number) => void;
    expect: Chainer;
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
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        loading: (_: string, loading: boolean) => {
            if (loading) {
                cy.get(this.rootElement).find('[data-id="table_body--loading"]').should('exist');
            } else {
                cy.get(this.rootElement)
                    .find('[data-id="table_body--loading"]')
                    .should('not.exist');
            }
        },
        rows: (_: string, count: number) => {
            cy.get(this.rootElement).find('tbody > tr').should('have.length', count);
        },
    };

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
        cy.get(this.rootElement)
            .find(`thead > tr input[type="checkbox"], input[type="radio"]`)
            .check({ force: true });
    }

    /**
     * Uncheck all the rows.
     *
     * Fails if the checkbox column is not present.
     * @method
     */
    uncheckAll(): void {
        cy.get(this.rootElement)
            .find(`thead > tr input[type="checkbox"], input[type="radio"]`)
            .uncheck({ force: true });
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

    /**
     * Execute an assertion on this page object
     */
    get expect(): Chainer {
        return (chainer: string, ...params: unknown[]) =>
            this.assertMap[chainer](chainer, ...params);
    }
}

export default Table;
