import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import styled from 'styled-components';
import { Card, Button } from 'react-rainbow-components';
import {
    EmailPasswordSignInForm,
    WhenAuthenticated,
    WhenNoAuthenticated,
} from '@rainbow-modules/auth';
import app from '../../../../firebase';
import RainbowLogo from './icons/rainbowLogo';

const Container = styled.div.attrs((props) => props.theme.rainbow)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    background: ${(props) => props.palette.background.secondary};
    padding: 2rem;
`;

const Title = styled.h1.attrs((props) => props.theme.rainbow)`
    color: ${(props) => props.palette.text.title};
    font-size: 1.5rem;
    margin: 1rem auto;
    font-weight: normal;
`;

const StyledCard = styled(Card)`
    padding: 1.5rem;
    width: 400px;
`;

export const basicEmailPasswordSignInForm = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <Container>
                    <RainbowLogo />
                    <Title>rainbow-modules</Title>
                    <StyledCard>
                        <EmailPasswordSignInForm />
                    </StyledCard>
                </Container>
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <span>Authenticated!</span>
                <Button label="Log Out" onClick={() => app.auth().signOut()} />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Auth/Stories',
    component: 'EmailPasswordSignInForm',
};
