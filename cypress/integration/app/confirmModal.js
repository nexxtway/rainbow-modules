const CONFIRM_MODAL_URL = '/iframe.html?id=modules-app-stories-modals--show-confirm-modal-example';
const BUTTON_ICON = 'button[data-id=button-icon-element]';
const MODAL = 'section[aria-modal=true]';
const MODAL_BUTTON = 'button[data-id=button-element]';

describe('ConfirmModal', () => {
    beforeEach(() => {
        cy.visit(CONFIRM_MODAL_URL);
        cy.get(BUTTON_ICON).should('exist');
    });

    it('should open and close modal', () => {
        cy.get(BUTTON_ICON).first().click();
        cy.get(MODAL).should('exist');
        cy.get(MODAL).find(MODAL_BUTTON).first().click();
        cy.get(MODAL).should('not.exist');
    });
    it('should render success message when confirmModal return true', () => {
        cy.get(BUTTON_ICON).last().click();
        cy.get(MODAL).find(MODAL_BUTTON).last().click();
        cy.get('p').contains('Item deleted successfully.').should('exist');
    });
    it('should not render success message when confirmModal return true', () => {
        cy.get(BUTTON_ICON).last().click();
        cy.get(MODAL).find(MODAL_BUTTON).first().click();
        cy.get('p').contains('Item deleted successfully.').should('not.exist');
    });
});
