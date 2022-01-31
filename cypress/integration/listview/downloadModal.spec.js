import path from 'path';

const EDITABLE_URL =
    '/iframe.html?id=modules-listview-stories-downloadmodal--default-download-modal&viewMode=story';

describe('DownloadModal', () => {
    beforeEach(() => {
        cy.visit(EDITABLE_URL);
    });

    it('should open DownloadModal and download a data.json file', () => {
        const downloadsFolder = Cypress.config('downloadsFolder');
        cy.get('[id="download-button-icon"]').click();
        cy.get('h1').should('contain', 'Download');
        cy.get('p').should(
            'contain',
            'The entries matching will be downloaded. If you need over 10,000 entries consider exporting.',
        );
        cy.get('h2').should('have.length', 2);
        cy.get('h2').eq(0).should('contain', 'Maximum entries');
        cy.get('h2').eq(1).should('contain', 'Select format');
        cy.get('[type="number"]').should('have.value', '500');
        cy.get('[type="radio"]').eq(0).should('be.checked').and('have.value', 'json');
        cy.get('[type="radio"]').eq(1).should('not.be.checked').and('have.value', 'csv');
        cy.get('button').contains('Download').click();
        cy.readFile(path.join(downloadsFolder, 'data.json')).should('exist');
    });

    it('should open DownloadModal and download a data.csv file', () => {
        const downloadsFolder = Cypress.config('downloadsFolder');
        cy.get('[id="download-button-icon"]').click();
        cy.get('h1').should('contain', 'Download');
        cy.get('p').should(
            'contain',
            'The entries matching will be downloaded. If you need over 10,000 entries consider exporting.',
        );
        cy.get('h2').should('have.length', 2);
        cy.get('h2').eq(0).should('contain', 'Maximum entries');
        cy.get('h2').eq(1).should('contain', 'Select format');
        cy.get('[type="number"]').should('have.value', '500');
        cy.get('[type="radio"]').eq(0).should('be.checked').and('have.value', 'json');
        cy.get('[type="radio"]')
            .eq(1)
            .should('not.be.checked')
            .and('have.value', 'csv')
            .check({ force: true });
        cy.get('button').contains('Download').click();
        cy.readFile(path.join(downloadsFolder, 'data.csv')).should('exist');
    });
});
