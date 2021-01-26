const EDITABLE_URL =
    '/iframe.html?id=modules-listview-stories-coloredstatuscolumn--editable-custom-colored-status-column&viewMode=story';

describe('ColoredStatusColumn', () => {
    beforeEach(() => {
        cy.visit(EDITABLE_URL);
    });

    it('should show a dropdown when clicked and isEditable is true', () => {
        cy.get('[aria-haspopup="listbox"]').first().click();
        cy.get('[role="listbox"').should('exist');
    });

    it('should show a checkmark on the selected option', () => {
        cy.get('[aria-haspopup="listbox"]').eq(1).click();
        cy.get('[role="option"]').eq(1).find('svg').should('exist');
    });

    it('should change value when clicking an option in the dropdown', () => {
        cy.get('[aria-haspopup="listbox"]').first().click();
        cy.get('[role="option"]').eq(1).click();
        cy.get('[aria-haspopup="listbox"]').first().should('have.text', 'delivered');
    });
});
