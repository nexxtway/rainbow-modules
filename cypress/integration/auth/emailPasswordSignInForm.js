const FORM_URL = '/iframe.html?id=modules-auth-stories--basic-email-password-sign-in-form';
const BUTTON = 'button[type="submit"]';
const SPINNER_BACKDROP = '[data-cy="app-spinner"]';
const EMAIL_INPUT = 'input[name="email"]';
const PASSWORD_INPUT = 'input[name="password"]';

describe('EmailPasswordSignInForm', () => {
    beforeEach(() => {
        cy.visit(FORM_URL);

        cy.intercept(
            'POST',
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?*',
            {
                statusCode: 400,
            },
        ).as('firebaseSignIn');
    });
    it('should request sign in endpoint and show spinner while loading', () => {
        cy.get(EMAIL_INPUT).type('test@email.com');
        cy.get(PASSWORD_INPUT).type('TestPassword');
        cy.get(BUTTON).click();
        cy.get(SPINNER_BACKDROP).should('exist');
        cy.wait('@firebaseSignIn');
    });
});
