import React from 'react';
import { Button } from 'react-rainbow-components';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import { showAppMessage } from '../../src/actions';

export const showAppLevelMessage = () => {
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
};

export const showAppLevelMessageTimeout3s = () => {
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
};

export default {
    title: 'App/Stories/Messages',
    component: RainbowFirebaseApp,
};
