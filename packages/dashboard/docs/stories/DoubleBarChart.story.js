import React from 'react';
import { Application } from 'react-rainbow-components';
import DoubleBarChart from '../../src/components/DoubleBarChart';

const containerStyles = {
    height: 300,
    padding: 25,
};

export const doubleBarChart = () => {
    const data = [
        { label: '1/20', values: [50, 75] },
        { label: '2/20', values: [75, 90] },
        { label: '3/20', values: [95, 100] },
        { label: '4/20', values: [49, 60] },
        { label: '5/20', values: [20, 23] },
        { label: '6/20', values: [80, 100] },
        { label: '7/20', values: [10, 100] },
        { label: '8/20', values: [33, 100] },
        { label: '9/20', values: [65, 100] },
        { label: '10/20', values: [50, 100] },
        { label: '11/20' },
        { label: '12/20', values: [75, 100] },
    ];

    return (
        <Application>
            <div style={containerStyles}>
                <DoubleBarChart data={data} titles={['SMS Delivered', 'SMS Sent']} yLabel="SMS" />
            </div>
        </Application>
    );
};

export default {
    title: 'Modules/Dashboard/Stories/DoubleBarChart',
};
