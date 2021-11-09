import { Tabset } from '../../../packages/cypress/src/pageObjects';

const TABSET_URL = '/iframe.html?id=modules-cypress-stories-tabset--basic-tabset&viewMode=story';

describe('Tabset page object', () => {
    beforeEach(() => {
        cy.visit(TABSET_URL);
    });

    it('should work', () => {
        const tabset = new Tabset('#tabset-1');
        tabset.expect('exist', true);
        tabset.getTab(1).click();
        tabset.getTab(1).expect('active', true);
        tabset.getTab(0).expect('active', false);
    });
});
