import React from 'react';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { Button, Card } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { RainbowLogo } from '@rainbow-modules/icons';
import { Redirect } from 'react-router-dom';
import app from '../../../../firebase';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';
import WhenNoAuthenticated from '../../src/components/WhenNoAuthenticated';
import EmailPasswordSignUpForm from '../../src/components/EmailPasswordSignUpForm';
import getAuth from '../../src/helpers/getAuth';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 2rem;
`;

const Title = styled.h1.attrs((props) => props.theme.rainbow)`
    font-family: Lato Light, sans-serif !important;
    color: ${(props) => props.palette.text.title};
    font-size: 1.5rem;
    margin: 1rem auto;
    font-weight: normal;
`;

const StyledCard = styled(Card)`
    width: 400px;
    padding: 1.5rem;
`;

export const basicEmailPasswordSignUpForm = () => {
    const auth = getAuth(app);
    return (
        <RainbowFirebaseApp app={app}>
            <Redirect from="/" to="/home" exact />
            <WhenNoAuthenticated path="/home" redirect="/app">
                <Container>
                    <RainbowLogo />
                    <Title>rainbow-modules</Title>
                    <StyledCard>
                        <EmailPasswordSignUpForm />
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
