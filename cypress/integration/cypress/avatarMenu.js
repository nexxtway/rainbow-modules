import { AvatarMenu, ButtonMenu } from '../../../packages/cypress/src/pageObjects';

const URL = '/iframe.html?id=modules-cypress-stories-avatarmenu--basic-tabset&viewMode=story';

describe('AvatarMenu page object', () => {
    beforeEach(() => {
        cy.visit(URL);
    });

    it('should run the actions', () => {
        const avatarMenu = new AvatarMenu('#avatar-menu');
        avatarMenu.button.click();
        avatarMenu.getOption(1).click();
        avatarMenu.button.click();
        avatarMenu.getOption(0).expect('text', 'Edit Profile');
    });
});
