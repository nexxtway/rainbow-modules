import React from 'react';
import { Button } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import useMutationFlow from '../../src/useMutationFlow';

const asyncFunction = () =>
    new Promise((resolve) => {
        return setTimeout(() => resolve({ status: 'OK' }), 1000);
    });

export const UseMutationWithoutSuccessNotification = () => {
    const { mutate } = useMutationFlow({
        mutation: asyncFunction,
    });

    return (
        <RainbowFirebaseApp app={app}>
            <Button label="async operation" onClick={mutate} />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Hooks/Stories',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
