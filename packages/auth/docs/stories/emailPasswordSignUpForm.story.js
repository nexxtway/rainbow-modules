import React from 'react';
import { Button, Card } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';
import WhenNoAuthenticated from '../../src/components/WhenNoAuthenticated';
import EmailPasswordSignUpForm from '../../src/components/EmailPasswordSignUpForm';
import RainbowLogo from './icons/rainbowLogo';

export default {
    title: 'Auth/Stories',
};

const style = {
    margin: 'auto',
    maxWidth: '400px',
};
const logoStyle = { textAlign: 'center' };
const logoTextStyle = { fontSize: '1.8em' };

export const basicEmailPasswordSignUpForm = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <div className="rainbow-p-around_large" style={logoStyle}>
                    <RainbowLogo />
                    <h3 style={logoTextStyle}>rainbow-modules</h3>
                </div>
                <Card className="rainbow-p-around_large" style={style}>
                    <EmailPasswordSignUpForm />
                </Card>
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <span>Authenticated!</span>
                <Button label="Log Out" onClick={() => app.auth().signOut()} />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};
