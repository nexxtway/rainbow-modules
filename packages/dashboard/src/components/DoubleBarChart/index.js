import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Chart, Dataset } from 'react-rainbow-components';
import datalabels from 'chartjs-plugin-datalabels';
import handleData from './helpers/handleData';
import { Legend, LegendItem } from './legend';
import { StyledContainer } from './styled';
import getOptions from './helpers/getOptions';

const plugins = [datalabels];
const datalabelsConf = {
    anchor: 'end',
    align: 'top',
    display: 'auto',
};
const defaultColors = {
    rainbow: {
        palette: {
            brand: {
                main: '#01B6F6',
            },
            border: {
                divider: '#D7D9E2',
            },
        },
    },
};

const DoubleBarChart = (props) => {
    const { titles, data, xLabel, yLabel } = props;
    const { rainbow } = useContext(ThemeContext) || defaultColors;
    const [labels, [frontDataset, backDataset]] = handleData(data);
    const [frontTitle, backTitle] = titles;
    const frontColor = rainbow.palette.brand.main;
    const backColor = rainbow.palette.border.divider;
    const suggestedMax = Math.max(...frontDataset, ...backDataset) + 1;
    const options = getOptions({ xLabel, yLabel, suggestedMax });

    return (
        <StyledContainer>
            <Legend>
                <LegendItem color={backColor}>{titles[1]}</LegendItem>
                <LegendItem color={frontColor}>{titles[0]}</LegendItem>
            </Legend>
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
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** The data to show in the chart */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            values: PropTypes.arrayOf(PropTypes.number),
        }),
    ).isRequired,
    /** Label of the X axis */
    xLabel: PropTypes.string,
    /** Label of the Y axis */
    yLabel: PropTypes.string,
};

DoubleBarChart.defaultProps = {
    xLabel: undefined,
    yLabel: undefined,
};

export default DoubleBarChart;
