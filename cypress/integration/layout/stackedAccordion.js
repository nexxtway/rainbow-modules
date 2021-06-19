const STACKED_ACCORDION_URL =
    '/iframe.html?id=modules-layout-stories-stackedaccordion--basic-stacked-accordion';
const BUTTON_1 = 'button[aria-controls="section-1"]';
const BUTTON_2 = 'button[aria-controls="section-2"]';
const DIV_1 = 'div#section-1';
const DIV_2 = 'div#section-2';

describe('<FloatingBar />', () => {
    beforeEach(() => {
        cy.visit(STACKED_ACCORDION_URL);
    });

    it('should collapse the section when expanded and it is clicked', () => {
        cy.get(BUTTON_1).should('have.attr', 'aria-expanded', 'true');
        cy.get(DIV_1).should('exist');
        cy.get(BUTTON_1).click();
        cy.get(BUTTON_1).should('have.attr', 'aria-expanded', 'false');
        cy.get(DIV_1).should('not.exist');
    });

    it('should expand the section when collapsed and it is clicked', () => {
        cy.get(BUTTON_2).should('have.attr', 'aria-expanded', 'false');
        cy.get(DIV_2).should('not.exist');
        cy.get(BUTTON_2).click();
        cy.get(BUTTON_2).should('have.attr', 'aria-expanded', 'true');
        cy.get(DIV_2).should('exist');
    });

    it('should resize the sections', () => {
        const RESIZE_HANDLER = 'div[data-resizes="section-2"]';
        let y = 0;
        cy.get(BUTTON_2).click();
        cy.get(RESIZE_HANDLER).then((element) => {
            y = element[0].getBoundingClientRect().y;
        });
        cy.get(RESIZE_HANDLER)
            .trigger('mousedown')
            .trigger('mousemove', { which: 1, clientY: 600 })
            .trigger('mouseup');
        cy.get(RESIZE_HANDLER).then((element) => {
            assert.isAbove(element[0].getBoundingClientRect().y, y);
        });
    });
});
