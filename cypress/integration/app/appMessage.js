/// <reference types="cypress" />
import { AppMessage } from '../../../packages/cypress/src/pageObjects';

const APP_MESSAGE_URL =
    'iframe.html?id=modules-app-stories-messages--show-app-level-message&viewMode=story';
const APP_MESSAGE_TIMEOUT_URL =
    'iframe.html?id=modules-app-stories-messages--show-app-level-message-timeout-3-s&viewMode=story';
const APP_MESSAGE = 'Uh-oh! We Were Unable To Find your Information.';

describe('AppMessage', () => {
    beforeEach(() => {
        cy.visit(APP_MESSAGE_URL);
    });

    it('should show an app message', () => {
        cy.get('button').click();
        const appMessage = new AppMessage('[data-cy="app-message"]');
        appMessage.shouldBeVisible();
        appMessage.shouldHaveMessage(APP_MESSAGE);
    });

    it('should hide the message when the close button is clicked', () => {
        cy.get('button').click();
        const appMessage = new AppMessage('[data-cy="app-message"]');
        appMessage.shouldBeVisible();
        appMessage.closeButton.click();
        appMessage.shouldBeHidden();
    });
});

describe('AppMessage with timeout', () => {
    beforeEach(() => {
        cy.visit(APP_MESSAGE_TIMEOUT_URL);
    });

    it('should be hidden after the timeout', () => {
        cy.get('button').click();
        const appMessage = new AppMessage('[data-cy="app-message"]');
        appMessage.shouldBeVisible();
        // We can wait this time here since this is the app message timeout
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000);
        appMessage.shouldBeHidden();
    });
});
