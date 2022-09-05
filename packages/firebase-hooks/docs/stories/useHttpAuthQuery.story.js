import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import useHttpAuthQuery from '../../src/http/useHttpAuthQuery';

const Example = () => {
    const { data, isLoading } = useHttpAuthQuery({
        functionName: 'expressTestFn',
        pathname: '/helloWorld',
    });

    if (isLoading) {
        return <span>Is Loading ...</span>;
    }

    return !data ? (
        <span>No data :(</span>
    ) : (
        Object.keys(data).map((key) => {
            return (
                <span key={key}>
                    <span>{`${key}: `}</span>
                    <span>{data[key]}</span>
                </span>
            );
        })
    );
};

export const UseHttpAuthQuery = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Example />
        </RainbowFirebaseApp>
    );
};
