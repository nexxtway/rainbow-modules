const FORM_URL = '/iframe.html?id=modules-datetime-stories-datepickercarousel--with-date-bounds';
const DATE_PICKER_CAROUSEL = '#date-picker-carousel-1';
const PICKER_LABEL = `[data-cy=carousel-input__label-button]`;
const CALENDAR_DAY_CARD = `[data-cy=carousel-calendar__day-card]`;
const CALENDAR_SCROLL_BUTTON = `[data-id=button-icon-element]`;
const DATE_PICKER_MODAL = `${DATE_PICKER_CAROUSEL}_modal`;

describe('DatePickerCarousel', () => {
    beforeEach(() => {
        cy.visit(FORM_URL);
        cy.viewport(1024, 768);
        cy.reload(true);
    });
    it('it should open modal when click on input label', () => {
        cy.get(PICKER_LABEL).click();
        cy.get(DATE_PICKER_MODAL).should('exist');
    });
    it('should set the right value when select a date', () => {
        cy.get(CALENDAR_DAY_CARD).eq(6).click();
        cy.get(PICKER_LABEL).should('contain', 'September 18, 2020');
    });
    it('should select date when ENTER_KEY is pressed', () => {
        cy.get(CALENDAR_DAY_CARD).eq(5).type('{leftArrow}');
        cy.get(CALENDAR_DAY_CARD).eq(5).type('{enter}');
        cy.get(CALENDAR_DAY_CARD).eq(5).should('be.focused');
        cy.get(CALENDAR_DAY_CARD).eq(5).should('have.attr', 'data-selected', 'true');
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
        cy.get(CALENDAR_DAY_CARD).first().should('contain', '12');
        cy.get(CALENDAR_DAY_CARD).first().type('{leftArrow}');
        cy.get(CALENDAR_DAY_CARD).first().should('be.focused');
        cy.get(CALENDAR_DAY_CARD).first().should('contain', '11');
    });
    it('should focus next date and scroll right when latest visible date is focused and press ARROW_RIGHT key', () => {
        cy.get(CALENDAR_DAY_CARD).last().should('contain', '24');
        cy.get(CALENDAR_DAY_CARD).last().type('{rightArrow}');
        cy.get(CALENDAR_DAY_CARD).last().should('be.focused');
        cy.get(CALENDAR_DAY_CARD).last().should('contain', '25');
    });
});
