import React from 'react';
import { Application } from 'react-rainbow-components';
import FlightStatsInput from '../../src/components/FlightStatsInput';

export const Basic = () => {
    return (
        <Application>
            <FlightStatsInput />
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/FlightStatsInput',
};
