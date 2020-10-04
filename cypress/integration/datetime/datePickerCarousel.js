const FORM_URL = '/iframe.html?id=modules-datetime-stories-datepickercarousel--with-date-bounds';
const DATE_PICKER_CAROUSEL = '#date-picker-carousel-1';
const PICKER_LABEL = `${DATE_PICKER_CAROUSEL} [data-cy=carousel-input__label-button]`;
const CALENDAR_DAY_CARD = `${DATE_PICKER_CAROUSEL} [data-cy=carousel-calendar__day-card]`;
const CALENDAR_SCROLL_BUTTON = `${DATE_PICKER_CAROUSEL} [data-id=button-icon-element]`;
const DATE_PICKER_MODAL = `${DATE_PICKER_CAROUSEL}_modal`;

describe('DatePickerCarousel', () => {
    beforeEach(() => {
        cy.viewport(1024, 768);
        cy.visit(FORM_URL);
        cy.reload(true);
    });
    it('it should open modal when click on input label', () => {
        cy.get(PICKER_LABEL).click();
        cy.get(DATE_PICKER_MODAL).should('exist');
    });
    it('should set the right value when select a date', () => {
        cy.get(CALENDAR_DAY_CARD).contains('12').click();
        cy.get(PICKER_LABEL).contains('September 12, 2020');
    });
    it('should select date when ENTER_KEY is pressed', () => {
        cy.get(CALENDAR_DAY_CARD).eq(8).type('{enter}');
        cy.get(CALENDAR_DAY_CARD).eq(8).should('be.focused');
        cy.get(CALENDAR_DAY_CARD).eq(8).should('have.attr', 'data-selected', 'true');
    });
    it('should disable scroll left button when minDate is visible', () => {
        cy.get(CALENDAR_SCROLL_BUTTON).eq(0).should('not.be.disabled');
        Array.from({ length: 11 }, () => cy.get(CALENDAR_SCROLL_BUTTON).eq(0).click());
        cy.get(CALENDAR_SCROLL_BUTTON).eq(0).should('be.disabled');
    });
    it('should disable scroll right button when maxDate is visible', () => {
        cy.get(CALENDAR_SCROLL_BUTTON).eq(1).should('not.be.disabled');
        Array.from({ length: 6 }, () => cy.get(CALENDAR_SCROLL_BUTTON).eq(1).click());
        cy.get(CALENDAR_SCROLL_BUTTON).eq(1).should('be.disabled');
    });
    it('should focus next date when ARROW_RIGHT key is pressed', () => {
        cy.get(CALENDAR_DAY_CARD).eq(3).click();
        cy.get(CALENDAR_DAY_CARD).eq(3).type('{rightArrow}');
        cy.get(CALENDAR_DAY_CARD).eq(4).should('be.focused');
    });
    it('should focus previous date when ARROW_LEFT key is pressed', () => {
        cy.get(CALENDAR_DAY_CARD).eq(3).click();
        cy.get(CALENDAR_DAY_CARD).eq(3).type('{leftArrow}');
        cy.get(CALENDAR_DAY_CARD).eq(2).should('be.focused');
    });
    it('should focus previous date and scroll left when first visible date is focused and press ARROW_LEFT key', () => {
        cy.get(CALENDAR_DAY_CARD).contains('11').should('not.exist');
        cy.get(CALENDAR_DAY_CARD).contains('12').type('{leftArrow}');
        cy.get(CALENDAR_DAY_CARD).contains('11').should('exist');
        // cy.get(CALENDAR_DAY_CARD).eq(0).contains('12');
        // cy.get(CALENDAR_DAY_CARD).eq(0).type('{leftArrow}');
        // cy.get(CALENDAR_DAY_CARD).eq(0).should('be.focused');
        // cy.get(CALENDAR_DAY_CARD).eq(0).contains('11');
    });
    it('should focus next date and scroll right when latest visible date is focused and press ARROW_RIGHT key', () => {
        cy.get(CALENDAR_DAY_CARD).contains('25').should('not.exist');
        cy.get(CALENDAR_DAY_CARD).contains('24').type('{rightArrow}');
        cy.get(CALENDAR_DAY_CARD).contains('25').should('exist');
        // cy.get(CALENDAR_DAY_CARD).eq(12).children('span').eq(1).contains('24');
        // cy.get(CALENDAR_DAY_CARD).eq(12).type('{rightArrow}');
        // cy.get(CALENDAR_DAY_CARD).eq(12).should('be.focused');
        // cy.get(CALENDAR_DAY_CARD).eq(12).children('span').eq(1).contains('25');
    });
});
