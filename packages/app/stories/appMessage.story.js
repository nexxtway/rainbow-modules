import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-rainbow-components';
import app from '../../../firebase';
import RainbowFirebaseApp from '../src/components/App';
import { showAppMessage } from '../src/actions';

const stories = storiesOf('RainbowFirebaseApp/App Message', module);

stories.add('show app message', () => {
    const showMessage = () => {
        showAppMessage({
            message: 'Error Message',
            variant: 'error',
        });
    };

    return (
        <RainbowFirebaseApp app={app}>
            <Button label="Show App Message" onClick={showMessage} />
        </RainbowFirebaseApp>
    );
});

stories.add('show app message for 3s', () => {
    const showMessage = () => {
        showAppMessage({
            message: 'Success Message',
            variant: 'success',
            timeout: 3000,
        });
    };

    return (
        <RainbowFirebaseApp app={app}>
            <Button label="Show App Message for 3s" onClick={showMessage} />
        </RainbowFirebaseApp>
    );
});
