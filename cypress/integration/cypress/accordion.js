import { Accordion } from '../../../packages/cypress/src/pageObjects';

const URL = '/iframe.html?id=modules-cypress-stories-accordion--basic-accordion&viewMode=story';

describe('Accordion page object', () => {
    beforeEach(() => {
        cy.visit(URL);
    });

    it('should run the actions', () => {
        const accordion = new Accordion('#accordion-1');
        accordion.getSection(0).click();
        accordion.getSection(0).expect('active', true);
        accordion.getSection(1).button.click();
        accordion.getSection(0).expect('active', false);
    });
});
