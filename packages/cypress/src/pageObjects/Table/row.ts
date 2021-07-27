/// <reference types="cypress" />

import ButtonMenu from '../ButtonMenu';

export interface IRow {
    check: () => void;
    uncheck: () => void;
    getButtonMenu: (actionColumnIndex: number) => ButtonMenu;
}

/**
 * Page object to perform operations on a Row
 * @type {IRow}
 */
class Row implements IRow {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Check this row
     * @method
     */
    check = (): void => {
        cy.get(this.rootElement)
            .find('input[type="checkbox"], input[type="radio"]')
            .check({ force: true });
    };

    /**
     * Uncheck this row
     * @method
     */
    uncheck = (): void => {
        cy.get(this.rootElement)
            .find('input[type="checkbox"], input[type="radio"]')
            .uncheck({ force: true });
    };

    /**
     * Get a new ButtonMenu page object wrapping this row actions
     * @method
     * @param actionColumnIndex The index of the actions column
     * @returns {ButtonMenu}
     */
    getButtonMenu = (actionColumnIndex: number): ButtonMenu => {
        return new ButtonMenu(`${this.rootElement} td:nth-child(${actionColumnIndex}) > div`);
    };
}

export default Row;
