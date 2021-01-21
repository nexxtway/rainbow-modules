/* eslint-disable react/jsx-no-undef */
import React from 'react';
import RainbowFirebaseApp from '../../src/components/App';

export const DefaultErrorBoundary = () => {
    return (
        <RainbowFirebaseApp>
            <Error />
        </RainbowFirebaseApp>
    );
};
