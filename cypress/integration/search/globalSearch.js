const GLOBAL_SEARCH_URL =
    '/iframe.html?id=modules-search-stories-globalsearch--algolia-global-search';
const AGOLIA_URL = 'https://6mt6rezjme-dsn.algolia.net/1/indexes/rainbow-books/query';
const SEARCH_INPUT = 'input[type="search"]';

const searchBooksAlgolia = () =>
    cy
        .intercept('POST', AGOLIA_URL, { fixture: 'globalSearchResult.json' })
        .as('searchBooksAlgolia');

describe('GlobalSearch', () => {
    beforeEach(() => {
        cy.visit(GLOBAL_SEARCH_URL);
        searchBooksAlgolia();
    });

    it('should open the GlobaSearch', () => {
        cy.get(SEARCH_INPUT).click();
        cy.get('h1').contains('Type something to search').should('exist');
    });

    it('should close the GlobaSearch', () => {
        cy.get(SEARCH_INPUT).click();
        cy.get('button').click();
        cy.get('h1').contains('Type something to search').should('not.exist');
    });

    it('should clear the input value', () => {
        cy.get(SEARCH_INPUT).type('Harry Potter');
        cy.get('button').eq(1).click();
        cy.get(SEARCH_INPUT).should('have.value', '');
    });

    it('should show the search results', () => {
        cy.get(SEARCH_INPUT).type('Harry Potter');
        cy.get('ul li').its('length').should('be.gt', 4);
    });
});
