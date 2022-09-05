import React, { useState } from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Button, Input, Card } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';
import WhenNoAuthenticated from '../../src/components/WhenNoAuthenticated';
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

const StyledButton = styled(Button)`
    width: 100%;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);

    const onSubmit = (event) => {
        event.preventDefault();
        return signInWithEmailAndPassword(auth, email, password);
    };

    return (
        <Container>
            <RainbowLogo />
            <Title>rainbow-modules</Title>
            <StyledCard>
                <form onSubmit={onSubmit}>
                    <Input
                        label="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="rainbow-m-vertical_small"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="rainbow-m-vertical_small"
                        required
                    />
                    <StyledButton
                        label="Sign In"
                        type="submit"
                        variant="brand"
                        className="rainbow-m-top_small"
                    />
                </form>
            </StyledCard>
        </Container>
    );
};

export const basicEmailPasswordAuthFlow = () => {
    const auth = getAuth(app);

    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <Login />
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <span>Authenticated!</span>
                <Button label="Log Out" onClick={() => signOut(auth)} />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};
