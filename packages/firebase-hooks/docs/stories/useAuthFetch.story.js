import React from 'react';
import { Button } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import useAuthFetch from '../../src/http/useAuthFetch';

const GetExample = () => {
    const { fetch, isLoading } = useAuthFetch({ functionName: 'expressTestFn' });

    const fetchData = async () => {
        const result = await fetch('helloWorld');
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(result));
    };

    return <Button label="Make Request" onClick={fetchData} isLoading={isLoading} />;
};

export const UseAuthFetch = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <GetExample />
        </RainbowFirebaseApp>
    );
};

const PostExample = () => {
    const { fetch, isLoading } = useAuthFetch({ functionName: 'expressTestFn' });

    const fetchData = async () => {
        const result = await fetch('customHelloWorld', {
            method: 'POST',
            body: {
                name: 'John Doe',
            },
        });
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(result));
    };

    return <Button label="Make Request" onClick={fetchData} isLoading={isLoading} />;
};

export const UseAuthFetchPost = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <PostExample />
        </RainbowFirebaseApp>
    );
};
