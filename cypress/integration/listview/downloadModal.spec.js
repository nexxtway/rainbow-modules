import path from 'path';

const EDITABLE_URL =
    '/iframe.html?id=modules-listview-stories-downloadmodal--default-download-modal&viewMode=story';

describe('DownloadModal', () => {
    beforeEach(() => {
        cy.visit(EDITABLE_URL);
    });

    it('should open DownloadModal', () => {
        cy.get('[id="download-button-icon"]').click();
        cy.get('#default-download-modal').within(() => {
            cy.get('h1').should('contain', 'Download');
            cy.get('p').should(
                'contain',
                'Entries matching the number specified in “Maximum entries” will be downloaded. If you need more than 10,000 entries, consider exporting.',
            );
            cy.get('h2').should('have.length', 2);
            cy.get('h2').eq(0).should('contain', 'Maximum entries');
            cy.get('h2').eq(1).should('contain', 'Select format');
            cy.get('[type="number"]').should('have.value', '10');
            cy.get('[type="radio"]').eq(0).should('be.checked').and('have.value', 'json');
            cy.get('[type="radio"]').eq(1).should('not.be.checked').and('have.value', 'csv');
        });
    });

    it('should download a data.json file', () => {
        const downloadsFolder = Cypress.config('downloadsFolder');
        cy.get('[id="download-button-icon"]').click();
        cy.get('#default-download-modal').within(() => {
            cy.get('button').contains('Download').click();
        });
        cy.readFile(path.join(downloadsFolder, 'data.json')).should('exist');
    });

    it('should download a data.csv file', () => {
        const downloadsFolder = Cypress.config('downloadsFolder');
        cy.get('[id="download-button-icon"]').click();
        cy.get('#default-download-modal').within(() => {
            cy.get('[type="radio"]')
                .eq(1)
                .should('not.be.checked')
                .and('have.value', 'csv')
                .check({ force: true });
            cy.get('button').contains('Download').click();
        });
        cy.readFile(path.join(downloadsFolder, 'data.csv')).should('exist');
    });
});
