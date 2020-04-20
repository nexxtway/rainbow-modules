import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-rainbow-components';
import app from './firebase';
import RainbowFirebaseApp from '../src/components/App';
import { showAppSpinner, hideAppSpinner } from '../src/actions';

const Content = () => {
    const show = () => {
        showAppSpinner();
        setTimeout(() => {
            hideAppSpinner();
        }, 3000);
    };
    return <Button label="Show App Spinner for 3s" onClick={show} />;
};

const stories = storiesOf('RainbowFirebaseApp/App Spinner', module);

stories.add('show spinner for 3s', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Content />
        </RainbowFirebaseApp>
    );
});
