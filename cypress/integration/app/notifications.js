/* eslint-disable cypress/no-unnecessary-waiting */
const APP_NOTIFICATION_URL =
    '/iframe.html?id=modules-app-stories-notifications--show-app-level-notification';
const APP_NOTIFICATION_TIMEOUT_URL =
    '/iframe.html?id=modules-app-stories-notifications--show-app-level-notification-timeout-5-s';
const BUTTON = 'button[id="notification-button"]';

describe('App notifications', () => {
    it('should show a notification', () => {
        cy.visit(APP_NOTIFICATION_URL);
        cy.get(BUTTON).click();
        cy.wait(1000);
        cy.get('[data-cy=notification]').should('have.length', 1);
    });

    it('should close the notification when button close is clicked', () => {
        cy.visit(APP_NOTIFICATION_URL);
        cy.get(BUTTON).click();
        cy.wait(1000);
        cy.get('[title=Close]').click();
        cy.wait(1000);
        cy.get('[data-cy=notification]').should('have.length', 0);
    });

    it('should remove the notification after the timeout', () => {
        cy.visit(APP_NOTIFICATION_TIMEOUT_URL);
        cy.get(BUTTON).click();
        cy.get('[data-cy=notification]').should('have.length', 1);
        cy.wait(6000);
        cy.get('[data-cy=notification]').should('have.length', 0);
    });
});
