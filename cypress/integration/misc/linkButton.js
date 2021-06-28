const FLOATING_TOP_BAR_URL =
    '/iframe.html?id=modules-misc-stories-linkbutton--link-button-variants';

describe('<LinkButton />', () => {
    beforeEach(() => {
        cy.visit(FLOATING_TOP_BAR_URL);
    });

    it('should navigate when a Link is clicked', () => {
        cy.get('a').contains('Button Neutral').click();
        cy.get('[data-cy="neutral"]').should('exist');
    });

    it('should not bleed unwanted props to DOM', () => {
        const props = ['theme', 'palette', 'shadows', 'inverse', 'variant'];
        props.forEach((prop) => {
            cy.get(`a[${prop}]`, { timeout: 3000 }).should('not.exist');
        });
    });
});
