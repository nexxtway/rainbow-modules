const SIDEBAR_NAVIGATION_URL = '/iframe.html?id=modules-app-stories--side-bar-navigation';
const NAVIGATION_ITEM = '[data-id="sidebar-item-clickable-element"]';

describe('SideBarNavigation', () => {
    beforeEach(() => {
        cy.visit(SIDEBAR_NAVIGATION_URL);
    });

    it('should navigate to the selected route', () => {
        cy.get(NAVIGATION_ITEM).eq(1).click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.equal('/export');
        });
    });

    it('should select an option based on the browser url', () => {
        cy.window().then((win) => {
            win.history.pushState({}, '', 'billing');
        });
        cy.get(NAVIGATION_ITEM).eq(2).should('have.attr', 'aria-current', 'page');
    });
});
