import React from 'react';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import sleep from './helpers/sleep';

export default {
    title: 'Modules|App/Stories/RainbowFirebaseApp',
    component: RainbowFirebaseApp,
};

export const appWithInitialize = () => {
    const initialize = async () => {
        await sleep(2000);
    };

    return (
        <RainbowFirebaseApp app={app} initialize={initialize}>
            <p>App is ready</p>
        </RainbowFirebaseApp>
    );
};
