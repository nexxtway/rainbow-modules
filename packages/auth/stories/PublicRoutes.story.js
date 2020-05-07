import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-rainbow-components';
/* eslint-disable-next-line import/no-unresolved */
import { RainbowFirebaseApp, showAppSpinner, hideAppSpinner } from '@rainbow-modules/app';
import app from '@rainbow-modules/app/stories/firebase';

const stories = storiesOf('Authentication/Spinner', module);

const Content = () => {
    const show = () => {
        showAppSpinner();
        setTimeout(() => {
            hideAppSpinner();
        }, 1000);
    };
    return <Button label="Show App Spinner for 1s" onClick={show} />;
};

stories.add('show App Spinner', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Content />
        </RainbowFirebaseApp>
    );
});
