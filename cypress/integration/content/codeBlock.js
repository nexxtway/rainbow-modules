const CODE_BLOCK_URL = '/iframe.html?id=modules-content-stories-codeblock--code-block-example';

describe('<CodeBlock />', () => {
    beforeEach(() => {
        cy.visit(CODE_BLOCK_URL);
    });

    it('should show a message when CopyToClipboard button is clicked', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(win.prompt).as('copyToClipboardPrompt');
        });

        cy.get('button[data-id="button-icon-element"]').click();
        cy.get('div').contains('Copied to Clipboard').should('exist');
    });

    it('should change the icon when copied', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(win.prompt).as('copyToClipboardPrompt');
        });

        cy.get('button[data-id="button-icon-element"]').click();
        cy.get('svg > title', { timeout: 1000 }).contains('done').should('exist');
    });
});
