import { Step } from '../../../packages/cypress/src/pageObjects';

const STEP_URL = '/iframe.html?id=modules-content-stories-step--simple-step&viewMode=story';

describe('<CodeBlock />', () => {
    beforeEach(() => {
        cy.visit(STEP_URL);
    });

    it('should run the assertions', () => {
        const step = new Step('#step-1');
        step.expect('header', 'Step 1');
        step.expect('description', 'This is the first step');
    });
});
