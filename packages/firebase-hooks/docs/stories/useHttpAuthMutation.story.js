import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Button } from 'react-rainbow-components';
import app from '../../../../firebase';
import useHttpAuthMutation from '../../src/http/useHttpAuthMutation';

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
