const GLOBAL_SEARCH_URL =
    '/iframe.html?id=modules-search-stories-globalsearch--algolia-global-search';
const AGOLIA_URL = 'https://6mt6rezjme-dsn.algolia.net/1/indexes/rainbow-books/query';
const SEARCH_INPUT = 'input[type="search"]';
const CLOSE_BUTTON = 'button[type="button"]';
const CLEAR_BUTTON = '[data-cy=clear-button]';
const DOWN_KEY = 40;
const ENTER_KEY = 13;

const algoliaSearchMock = () =>
    cy
        .intercept('POST', AGOLIA_URL, { fixture: 'globalSearchResultAlgolia.json' })
        .as('algoliaSearchMock');

describe('GlobalSearch with Algolia', () => {
    beforeEach(() => {
        cy.visit(GLOBAL_SEARCH_URL);
        algoliaSearchMock();
    });

    it('should open the GlobaSearch', () => {
        cy.get(SEARCH_INPUT).click();
        cy.get('h1').contains('Type something to search').should('exist');
    });

    it('should close the GlobaSearch when clicking the close button', () => {
        cy.get(SEARCH_INPUT).click();
        cy.get('[data-cy=global-search]').within(() => {
            cy.get(CLOSE_BUTTON).click();
        });
        cy.get('h1').contains('Type something to search').should('not.exist');
    });

    it('should clear the input value when clicking the clear button', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get(CLEAR_BUTTON).click();
        });
        cy.get(SEARCH_INPUT).should('have.value', '');
    });

    it('should clear the input value when clicking in the close ButtonIcon after closing the GlobalSearch without clear it', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get(CLOSE_BUTTON).click();
        });
        cy.get('button[data-id="button-icon-element"]').click();
        cy.get(SEARCH_INPUT).should('have.value', '');
    });

    it('should show the search results and the first element selected', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get('ul li').its('length').should('be.gt', 1);
            cy.get('ul li').eq(0).should('have.attr', 'aria-selected', 'true');
        });
    });

    it('should change the selected element when down key', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get('ul').trigger('keydown', { keyCode: DOWN_KEY });
            cy.get('ul li').eq(0).should('have.attr', 'aria-selected', 'false');
            cy.get('ul li').eq(1).should('have.attr', 'aria-selected', 'true');
        });
    });

    it('should show the tabset when enter key in the search', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get('ul li').eq(0).trigger('keydown', { keyCode: ENTER_KEY });
            cy.get('button[id="Books"]').should('exist');
            cy.get('button[id="Authors"]').should('exist');
        });
    });

    it('should show the tabset when click in the search', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get('ul li').eq(0).click();
            cy.get('button[id="Books"]').should('exist');
            cy.get('button[id="Authors"]').should('exist');
        });
    });

    it('should change to authors list when click in tab Authors', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get('ul li').eq(0).click();
            cy.get('[data-cy=Books]').should('exist');
            cy.get('button[id="Authors"]').click();
            cy.get('[data-cy=Books]').should('not.exist');
            cy.get('[data-cy=Authors]').should('exist');
        });
    });

    it('should show the pagination', () => {
        cy.get(SEARCH_INPUT).type('harry');
        cy.get('[data-cy=global-search]').within(() => {
            cy.get('ul li').eq(0).click();
            cy.get('button[data-id="previous-page-button"]').should('exist');
            cy.get('button[data-id="next-page-button"]').should('exist');
        });
    });
});
