const BUTTON = 'button[id="spinner-button"]';
const SPINNER_BACKDROP = '[data-cy="app-spinner"]';
const APP_SPINNER_URL = '/iframe.html?id=app-stories-spinners--circle-spinner';

describe('App Spinner', () => {
    beforeEach(() => {
        cy.visit(APP_SPINNER_URL);
    });

    it('should ', () => {
        cy.get(BUTTON).click();
        cy.get(SPINNER_BACKDROP).should('be.visible');
    });
});
