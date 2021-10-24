import { RadioGroup } from '../../../packages/cypress/src/pageObjects';

const RADIO_GROUP_URL =
    '/iframe.html?id=modules-cypress-radiogroup--basic-radio-group&viewMode=story';

describe('<CodeBlock />', () => {
    beforeEach(() => {
        cy.visit(RADIO_GROUP_URL);
    });

    it('should work', () => {
        const radioGroup = new RadioGroup('#radiogroup');
        radioGroup.inputs[0].check();
        radioGroup.inputs[2].check();
        radioGroup.expect('error', 'This field is required');
    });
});
