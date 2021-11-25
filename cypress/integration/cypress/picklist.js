import { Picklist } from '../../../packages/cypress/src/pageObjects';

const URL = '/iframe.html?id=modules-cypress-stories-picklist--basic-picklist&viewMode=story';

describe('Picklist page object', () => {
    beforeEach(() => {
        cy.visit(URL);
    });

    it('should run the actions', () => {
        const picklist = new Picklist('#picklist-1');
        picklist.expect('open', false);
        picklist.click();
        picklist.expect('open', true);
        picklist.getOption(1).click();
        picklist.expect('open', false);
        picklist.input.should('have.value', 'Experimental Building');
    });
});
