import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Input } from 'react-rainbow-components';
import { Route } from 'react-router-dom';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../firebase';
import WhenAuthenticated from '../src/components/WhenAuthenticated';
import WhenNoAuthenticated from '../src/components/WhenNoAuthenticated';

const stories = storiesOf('Auth/routes', module);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        return app.auth().signInWithEmailAndPassword(email, password);
    };

    return (
        <form onSubmit={onSubmit}>
            <Input label="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button label="Sign In" type="submit" />
        </form>
    );
};

stories.add('show App Spinner', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <Login />
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <span>Authenticated!</span>
                <Button label="Log Out" onClick={() => app.auth().signOut()} />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
});
