/// <reference types="cypress" />

const CODE_VIEWER_URL =
    '/iframe.html?id=modules-content-stories-codeviewer--code-viewer-example&viewMode=story';
const CODE_VIEWER_LONG_URL =
    '/iframe.html?id=modules-content-stories-codeviewer--code-viewer-long-content-example&viewMode=story';

describe('<CodeViewer />', () => {
    describe('Short code', () => {
        beforeEach(() => {
            cy.visit(CODE_VIEWER_URL);
        });

        // TODO: enable this test once the issue is solved
        it.skip('should scroll horizontally', () => {
            cy.get('li#node-9').click();
            cy.get('div').contains('Loading content').should('not.exist');
            cy.get('div.ReactVirtualized__Grid').scrollTo('50%', 0, {
                ensureScrollable: true,
            });
        });
    });

    describe('Long code', () => {
        beforeEach(() => {
            cy.visit(CODE_VIEWER_LONG_URL);
        });

        it('should scroll horizontally', () => {
            cy.get('li#node-9').click();
            cy.get('div').contains('Loading content').should('not.exist');
            cy.get('div.ReactVirtualized__Grid').scrollTo('50%', 0, {
                ensureScrollable: true,
            });
        });
    });
});
