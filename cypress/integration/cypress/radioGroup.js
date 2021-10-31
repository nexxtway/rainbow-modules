import { RadioGroup } from '../../../packages/cypress/src/pageObjects';

const RADIO_GROUP_URL =
    '/iframe.html?id=modules-cypress-stories-radiogroup--basic-radio-group&viewMode=story';

describe('<CodeBlock />', () => {
    beforeEach(() => {
        cy.visit(RADIO_GROUP_URL);
    });

    it('should work', () => {
        const radioGroup = new RadioGroup('#radiogroup');
        radioGroup.getInput(0).check();
        radioGroup.getInput(2).check();
        radioGroup.expect('error', 'This field is required');
        radioGroup.expect('value', 'radioThree');
    });
});
