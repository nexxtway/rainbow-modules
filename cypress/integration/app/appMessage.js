/// <reference types="cypress" />
import { RainbowFirebaseApp } from '../../../packages/cypress/src/pageObjects';

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
        cy.get('button[data-id="button-element"]').click();
        const app = new RainbowFirebaseApp();
        app.message.expect('visible', true);
        app.message.expect('variant', 'error');
        app.message.expect('message', APP_MESSAGE);
    });

    it('should hide the message when the close button is clicked', () => {
        cy.get('button[data-id="button-element"]').click();
        const app = new RainbowFirebaseApp();
        app.message.expect('visible', true);
        app.message.close();
        app.message.expect('visible', false);
    });
});

describe('AppMessage with timeout', () => {
    beforeEach(() => {
        cy.visit(APP_MESSAGE_TIMEOUT_URL);
    });

    it('should be hidden after the timeout', () => {
        cy.get('button[data-id="button-element"]').click();
        const app = new RainbowFirebaseApp();
        app.message.expect('visible', true);
        app.message.expect('variant', 'success');
        // We can wait this time here since this is the app message timeout
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000);
        app.message.expect('visible', false);
    });
});
