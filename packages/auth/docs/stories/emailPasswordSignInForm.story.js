import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import styled from 'styled-components';
import { Card, Button } from 'react-rainbow-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import EmailPasswordSignInForm from '../../src/components/EmailPasswordSignInForm';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';
import WhenNoAuthenticated from '../../src/components/WhenNoAuthenticated';
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
            <Routes>
                <Route
                    path="/home"
                    element={
                        <WhenNoAuthenticated redirect="/app">
                            <Container>
                                <RainbowLogo />
                                <Title>rainbow-modules</Title>
                                <StyledCard>
                                    <EmailPasswordSignInForm />
                                </StyledCard>
                            </Container>
                        </WhenNoAuthenticated>
                    }
                />
                <Route
                    path="/app"
                    element={
                        <WhenAuthenticated path="/app" redirect="/home">
                            <span>Authenticated!</span>
                            <Button label="Log Out" onClick={() => app.auth().signOut()} />
                        </WhenAuthenticated>
                    }
                />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </RainbowFirebaseApp>
    );
};
