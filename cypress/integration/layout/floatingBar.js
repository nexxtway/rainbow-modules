const FLOATING_TOP_BAR_URL =
    '/iframe.html?id=modules-layout-stories-floatingbar--simple-floating-bar&viewMode=story';
const SHOW_BUTTON = 'button#show-bar-button';
const HIDE_BUTTON = 'button#hide-bar-button';

describe('<FloatingBar />', () => {
    beforeEach(() => {
        cy.visit(FLOATING_TOP_BAR_URL);
        cy.get(SHOW_BUTTON).should('exist');
    });

    it('should show and hide the FloatingBar', () => {
        cy.get(HIDE_BUTTON).should('not.be.inViewport');
        cy.get(SHOW_BUTTON).first().click();
        cy.get(HIDE_BUTTON).should('be.inViewport');
        cy.get(HIDE_BUTTON).first().click();
        cy.get(HIDE_BUTTON).should('not.be.inViewport');
    });
});
