import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Button } from 'react-rainbow-components';
import app from '../../../../firebase';
import useHttpAuthMutation from '../../src/http/useHttpAuthMutation';
import useMutationFlow from '../../../hooks/src/useMutationFlow';

const Example = () => {
    const { mutate, isLoading } = useHttpAuthMutation({
        functionName: 'expressTestFn',
        pathname: '/customHelloWorld',
        method: 'POST',
    });

    const onMutate = () =>
        mutate(
            { name: 'John Doe' },
            {
                onSuccess: (result) => {
                    // eslint-disable-next-line no-alert
                    alert(JSON.stringify(result));
                },
            },
        );

    return <Button label="Mutate" onClick={onMutate} isLoading={isLoading} />;
};

export const UseHttpAuthMutation = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Example />
        </RainbowFirebaseApp>
    );
};

const ExampleWithMutationFlow = () => {
    // Note that here you need to use mutateAsync in order to work with the useMutationFlow
    const { mutateAsync, data, error } = useHttpAuthMutation({
        functionName: 'expressTestFn',
        pathname: '/customHelloWorld',
        method: 'POST',
    });
    const { mutate } = useMutationFlow({
        mutation: mutateAsync,
    });

    // eslint-disable-next-line no-console
    const onMutate = () => mutate({ name: 'John Doe' }, { onError: (error) => console.log(error) });

    return (
        <>
            <Button label="Mutate" onClick={onMutate} />
            <div className="rainbow-m-top_medium">Response:</div>
            <div>{JSON.stringify(data)}</div>
            <div className="rainbow-m-top_medium">Error:</div>
            <div>{JSON.stringify(error)}</div>
        </>
    );
};

export const UseHttpAuthMutationWithMutationFlow = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <ExampleWithMutationFlow />
        </RainbowFirebaseApp>
    );
};
