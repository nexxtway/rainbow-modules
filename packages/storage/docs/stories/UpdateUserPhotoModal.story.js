import React, { useState } from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import {
    WhenAuthenticated,
    WhenNoAuthenticated,
    EmailPasswordSignInForm,
} from '@rainbow-modules/auth';
import { Avatar, Button } from 'react-rainbow-components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Camera, User } from '@rainbow-modules/icons';
import styled from 'styled-components';
import app from '../../../../firebase';
import UpdateUserPhotoModal from '../../src/components/UpdateUserPhotoModal';

const StyledButton = styled(Button)`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: -25px 0 0 40px;
`;

const StyledAvatar = styled(Avatar)`
    width: 70px;
    height: 70px;
`;

const getInitials = (name) => {
    if (name) {
        const names = name.split(' ');
        const initials =
            names[0].substring(0, 1).toUpperCase() + names[1].substring(0, 1).toUpperCase();
        return initials;
    }
    return '';
};

export const BasicUpdateUserPhotoModal = () => {
    const [user, setUser] = useState();
    const [isOpen, setIsOpen] = useState(false);

    onAuthStateChanged(getAuth(app), (user) => {
        setUser(user);
    });

    const handleOnClick = () => {
        setIsOpen(true);
    };

    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <EmailPasswordSignInForm />
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
                    <div className="rainbow-m-horizontal_medium">
                        <StyledAvatar
                            src={user ? user.photoURL : null}
                            initials={user ? getInitials(user.displayName) : null}
                            icon={<User />}
                        />
                        <StyledButton id="button-1" variant="neutral" onClick={handleOnClick}>
                            <Camera />
                        </StyledButton>
                    </div>
                </div>
                <UpdateUserPhotoModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Storage/Stories/UpdateUserPhotoModal',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
