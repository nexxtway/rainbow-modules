import React from 'react';
import { Application } from 'react-rainbow-components';
import datalabels from 'chartjs-plugin-datalabels';
import { Chart } from '../../src';
import Dataset from '../../src/components/Dataset';
import Legend from '../../src/components/Legend';
import Scales from '../../src/components/Scales';
import Axis from '../../src/components/Scales/axis';
import Plugins from '../../src/components/Plugins';
import Plugin from '../../src/components/Plugins/plugin';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomValues(len, min, max) {
    return Array(len)
        .fill(0)
        .map(() => getRandomInt(min, max));
}

export const StackedBarChart = () => {
    const labels = [
        '07/21',
        '07/22',
        '07/23',
        '07/24',
        '07/25',
        '07/26',
        '07/27',
        '07/28',
        '07/29',
        '07/30',
        '08/01',
        '08/02',
    ];

    return (
        <Application>
            <Chart labels={labels}>
                <Legend position="top" align="start" reverse />
                <Scales>
                    <Axis
                        axis="y"
                        displayLabel
                        labelString="SMS"
                        labelFontFamily="Lato"
                        labelFontSize={14}
                        labelFontStyle="bold"
                        labelFontColor="#000"
                        suggestedMax={50}
                    />
                    <Axis
                        id="axis1"
                        axis="x"
                        barThickness={25}
                        categoryPercentage={0.5}
                        barPercentage={0.5}
                        display={false}
                        type="category"
                        stacked
                        offset
                    />
                    <Axis
                        axis="x"
                        id="axis2"
                        barThickness={25}
                        categoryPercentage={0.4}
                        barPercentage={1}
                        type="category"
                        stacked
                        offset
                    />
                </Scales>
                <Dataset
                    id="data1"
                    title="SMS Delivered"
                    values={getRandomValues(12, 0, 30)}
                    backgroundColor="#68c4e4"
                    xAxisId="axis1"
                    datalabels={{ color: '#68c4e4' }}
                />
                <Dataset
                    id="data2"
                    title="SMS Sent"
                    values={getRandomValues(12, 30, 40)}
                    backgroundColor="#dce5e4"
                    xAxisId="axis2"
                    datalabels={{ color: '#cad5d5' }}
                />
                <Plugins>
                    <Plugin id="datalabels" value={datalabels} anchor="end" align="top" />
                </Plugins>
            </Chart>
        </Application>
    );
};

export default {
    title: 'Modules|Charts/Stories/Chart',
};
