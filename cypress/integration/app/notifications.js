/* eslint-disable cypress/no-unnecessary-waiting */
const APP_NOTIFICATION_URL =
    '/iframe.html?id=modules-app-stories-notifications--show-app-level-notification';
const APP_NOTIFICATION_TIMEOUT_URL =
    '/iframe.html?id=modules-app-stories-notifications--show-app-level-notification-timeout-5-s';
const NOTIFICATION_BUTTON_INFO = 'button[id="notification-button-info"]';
const NOTIFICATION_BUTTON_SUCCESS = 'button[id="notification-button-success"]';
const NOTIFICATION_BUTTON_TIMEOUT = 'button[id="notification-button-timeout"]';

describe('App notifications', () => {
    it('should show a notification', () => {
        cy.visit(APP_NOTIFICATION_URL);
        cy.get(NOTIFICATION_BUTTON_INFO).click();
        cy.get('[data-cy=notification]').should('have.length', 1);
    });

    it('should close the notification when button close is clicked', () => {
        cy.visit(APP_NOTIFICATION_URL);
        cy.get(NOTIFICATION_BUTTON_SUCCESS).click();
        cy.get('[title=Close]').click();
        cy.get('[data-cy=notification]').should('have.length', 0);
    });

    it('should remove the notification after the timeout', () => {
        cy.visit(APP_NOTIFICATION_TIMEOUT_URL);
        cy.clock();
        cy.get(NOTIFICATION_BUTTON_TIMEOUT).click();
        cy.get('[data-cy=notification]').should('have.length', 1);
        cy.tick(10000);
        cy.get('[data-cy=notification]').should('have.length', 0);
    });
});
