import React from 'react';
import PropTypes from 'prop-types';
import { Chart, Dataset } from 'react-rainbow-components';
import { useTheme } from 'react-rainbow-components/libs/hooks';
import datalabels from 'chartjs-plugin-datalabels';
import { getNormalizedData, getOptions } from './helpers';
import { StyledContainer } from './styled';

const plugins = [datalabels];
const datalabelsConf = {
    anchor: 'end',
    align: 'top',
    display: 'auto',
};

const DoubleBarChart = (props) => {
    const { titles, data, xLabel, yLabel } = props;
    const theme = useTheme();
    const [labels, frontDataset, backDataset] = getNormalizedData(data);
    const [frontTitle, backTitle] = titles;
    const frontColor = theme.rainbow.palette.brand.main;
    const backColor = theme.rainbow.palette.border.divider;
    const suggestedMax = Math.max(...frontDataset, ...backDataset) + 1;
    const options = getOptions({ xLabel, yLabel, suggestedMax });

    return (
        <StyledContainer>
            <Chart
                plugins={plugins}
                datalabels={datalabelsConf}
                labels={labels}
                type="bar"
                disableXAxisGridLines
                disableYAxisGridLines
                options={options}
            >
                <Dataset
                    id="data1"
                    title={frontTitle}
                    values={frontDataset}
                    backgroundColor={frontColor}
                    xAxisId="frontAxis"
                    datalabels={{ color: frontColor }}
                />
                <Dataset
                    id="data2"
                    title={backTitle}
                    values={backDataset}
                    backgroundColor={backColor}
                    xAxisId="backAxis"
                    datalabels={{ color: backColor }}
                />
            </Chart>
        </StyledContainer>
    );
};

DoubleBarChart.propTypes = {
    /** The titles of the datasets */
    titles: PropTypes.arrayOf(PropTypes.string),
    /** The data to show in the chart */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            values: PropTypes.arrayOf(PropTypes.number),
        }),
    ),
    /** Label of the X axis */
    xLabel: PropTypes.string,
    /** Label of the Y axis */
    yLabel: PropTypes.string,
};

DoubleBarChart.defaultProps = {
    titles: [],
    data: undefined,
    xLabel: undefined,
    yLabel: undefined,
};

export default DoubleBarChart;
