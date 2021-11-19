import { Table } from '../../../packages/cypress/src/pageObjects';

const TABLE_URL = '/iframe.html?id=modules-cypress-stories-table--basic-table&viewMode=story';

describe('Table page object', () => {
    beforeEach(() => {
        cy.visit(TABLE_URL);
    });

    it('should work', () => {
        const table = new Table('#table-1');
        table.expect('rows', 7);
        table.getRow(2).check();
        table.checkRow(3);
        table.uncheckRow(2);
        table.getRow(3).uncheck();
        table.checkAll();
    });
});
