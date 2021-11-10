import React from 'react';
import styled from 'styled-components';
import { AvatarMenu, MenuItem } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
`;

export const BasicAvatarMenu = () => {
    return (
        <Container>
            <AvatarMenu
                id="avatar-menu"
                className="rainbow-m-horizontal_medium"
                assistiveText="Tahimi Leon"
                menuAlignment="right"
                menuSize="small"
                avatarSize="large"
                title="Tahimi Leon"
                initials="TL"
            >
                <MenuItem label="Edit Profile" iconPosition="left" />
                <MenuItem label="Logout" iconPosition="left" />
            </AvatarMenu>
        </Container>
    );
};

export default {
    title: 'Modules/Cypress/Stories/AvatarMenu',
};
