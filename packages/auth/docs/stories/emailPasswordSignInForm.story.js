import React from 'react';
import { signOut } from 'firebase/auth';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import styled from 'styled-components';
import { Card, Button } from 'react-rainbow-components';
import { Redirect } from 'react-router-dom';
import EmailPasswordSignInForm from '../../src/components/EmailPasswordSignInForm';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';
import WhenNoAuthenticated from '../../src/components/WhenNoAuthenticated';
import app from '../../../../firebase';
import RainbowLogo from './icons/rainbowLogo';
import getAuth from '../../src/helpers/getAuth';

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
    const auth = getAuth(app);

    return (
        <RainbowFirebaseApp app={app}>
            <Redirect from="/" to="/home" exact />
            <WhenNoAuthenticated path="/home" redirect="/app">
                <Container>
                    <RainbowLogo />
                    <Title>rainbow-modules</Title>
                    <StyledCard>
                        <EmailPasswordSignInForm />
                    </StyledCard>
                </Container>
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/home">
                <span>Authenticated!</span>
                <Button label="Log Out" onClick={() => signOut(auth)} />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};
