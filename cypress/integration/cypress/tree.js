import { Tree } from '../../../packages/cypress/src/pageObjects';

const URL = '/iframe.html?id=modules-cypress-stories-tree--basic-tree&viewMode=story';

describe('Tree page object', () => {
    beforeEach(() => {
        cy.visit(URL);
    });

    it('should run the actions', () => {
        const tree = new Tree('#tree');
        tree.getNode('0').click();
        tree.getNode('0').expect('selected', true);
        tree.getNode('1').expect('selected', false);

        tree.getNode('2').expect('expanded', true);
        tree.getNode('2').collapse();
        tree.getNode('2').expect('expanded', false);
        tree.getNode('2').collapse();
        tree.getNode('2').expect('expanded', false);

        tree.getNode('3').expand();
        tree.getNode('3').expect('expanded', true);
        tree.getNode('3').expand();
        tree.getNode('3').expect('expanded', true);
    });
});
