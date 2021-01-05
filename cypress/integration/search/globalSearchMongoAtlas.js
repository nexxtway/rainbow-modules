const GLOBAL_SEARCH_URL =
    '/iframe.html?id=modules-search-stories-globalsearch--mongo-atlas-global-search';
const MONGO_ATLAS_URL = 'https://express-atlas-search.herokuapp.com/movies/search';
const SEARCH_INPUT = 'input[type="search"]';

const mongoAtlasSearchMock = () =>
    cy
        .intercept('GET', MONGO_ATLAS_URL, { fixture: 'globalSearchResultMongoAtlas.json' })
        .as('mongoAtlasSearchMock');

describe('GlobalSearch with Mongo Atlas', () => {
    beforeEach(() => {
        cy.visit(GLOBAL_SEARCH_URL);
        mongoAtlasSearchMock();
    });

    it('should navigate to page 2 when click in  next-page button in pagination', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get('ul li').eq(0).click();
            cy.get('ul li').its('length').should('eq', 26);
            cy.get('button[data-id="next-page-button"]').click();
            cy.get('ul li').its('length').should('eq', 11);
        });
    });
});
