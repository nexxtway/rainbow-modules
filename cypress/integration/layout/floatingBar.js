const FLOATING_TOP_BAR_URL =
    '/iframe.html?id=modules-layout-stories-floatingbar--floating-bar-example';
const SCROLLABLE_DIV = 'div[data-cy="scrollable"]';
const TOPBAR_CONTAINER = 'div[data-cy="topbar-container"]';

describe('<FloatingBar />', () => {
    beforeEach(() => {
        cy.visit(FLOATING_TOP_BAR_URL);
        cy.get(SCROLLABLE_DIV).should('exist');
    });

    it('should show and hide the FloatingBar', () => {
        cy.get(TOPBAR_CONTAINER).should('not.be.inViewport');
        cy.get(SCROLLABLE_DIV).scrollTo(0, 100);
        cy.get(TOPBAR_CONTAINER).should('be.inViewport');
        cy.get(SCROLLABLE_DIV).scrollTo(0, 0);
        cy.get(TOPBAR_CONTAINER).should('not.be.inViewport');
    });
});
