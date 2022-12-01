import React, { useState } from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import {
    WhenAuthenticated,
    WhenNoAuthenticated,
    EmailPasswordSignInForm,
} from '@rainbow-modules/auth';
import { Avatar, Button } from 'react-rainbow-components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Camera } from '@rainbow-modules/icons';
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

export const BasicUpdateUserPhotoModal = () => {
    const [photoURL, setPhotoURL] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [initials, setInitials] = useState();

    const getInitials = (name) => {
        if (name) {
            const names = name.split(' ');
            const initials =
                names[0].substring(0, 1).toUpperCase() + names[1].substring(0, 1).toUpperCase();
            return initials;
        }
        return '';
    };

    onAuthStateChanged(getAuth(app), (user) => {
        if (user && user.photoURL) {
            setPhotoURL(user.photoURL);
        }
        setInitials(user.displayName ? getInitials(user.displayName) : user.email);
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
                            src={photoURL}
                            initials={initials}
                            assistiveText="Jose Leandro"
                            title="Jose Leandro"
                            size="large"
                        />
                        <StyledButton id="button-1" variant="neutral" onClick={handleOnClick}>
                            <Camera />
                        </StyledButton>
                    </div>
                </div>
                <UpdateUserPhotoModal
                    photo={photoURL}
                    bucket="video-labeling"
                    path="usertest"
                    avatarInitials={initials}
                    onChangePhotoUrl={setPhotoURL}
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    handlePhotoUrl={(photoURL) => setPhotoURL(photoURL)}
                />
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
