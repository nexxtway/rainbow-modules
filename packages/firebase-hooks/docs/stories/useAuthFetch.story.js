import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Button } from 'react-rainbow-components';
import app from '../../../../firebase';
import useAuthFetch from '../../src/http/useAuthFetch';

const GetExample = () => {
    const { fetchAsync, isLoading } = useAuthFetch({ functionName: 'expressTestFn' });

    const fetchData = async () => {
        const result = await fetchAsync('helloWorld');
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
    const { fetchAsync, isLoading } = useAuthFetch({ functionName: 'expressTestFn' });

    const fetchData = async () => {
        const result = await fetchAsync('customHelloWorld', {
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
