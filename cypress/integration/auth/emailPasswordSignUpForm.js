const FORM_URL = '/iframe.html?id=auth-stories--basic-email-password-sign-up-form';
const BUTTON = 'button[type="submit"]';
const SPINNER_BACKDROP = '[data-cy="app-spinner"]';
const NAME_INPUT = 'input[name="name"]';
const EMAIL_INPUT = 'input[name="email"]';
const PASSWORD_INPUT = 'input[name="password"]';

describe('EmailPasswordSignUpForm', () => {
    beforeEach(() => {
        cy.visit(FORM_URL);

        cy.server({
            delay: 1000,
        });
        cy.route(
            'POST',
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?*',
            [],
        ).as('firebaseSignUp');
    });

    it('should request create user endpoint and show spinner while loading', () => {
        cy.get(NAME_INPUT).type('Test');
        cy.get(EMAIL_INPUT).type('test@email.com');
        cy.get(PASSWORD_INPUT).type('TestPassword');
        cy.get(BUTTON).click();
        cy.get(SPINNER_BACKDROP).should('exist');
        cy.wait('@firebaseSignUp');
    });
});
