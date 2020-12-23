/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChartContext from '../Chart/context';

const Dataset = (props) => {
    const index = useRef();
    const {
        title,
        values,
        xAxisId,
        yAxisId,
        backgroundColor,
        barThickness,
        maxBarThickness,
        stack,
        order,
        ...rest
    } = props;
    const { chart } = useContext(ChartContext);

    useEffect(() => {
        const dataset = {
            data: values,
            label: title,
            xAxisID: xAxisId,
            yAxisID: yAxisId,
            backgroundColor,
            barThickness: 5,
            maxBarThickness,
            barPercentage: 0.5,
            stack,
            order,
            ...rest,
        };
        if (chart && chart.canvas) {
            if (!index.current) {
                const length = chart.data.datasets.push(dataset);
                index.current = length - 1;
            } else {
                chart.data.datasets[index.current] = dataset;
            }
            chart.update();
        }
        return () => {
            if (chart && chart.canvas) {
                chart.data.datasets.splice(index.current, 1);
                chart.update();
            }
        };
    }, [chart]);

    return <></>;
};

Dataset.propTypes = {
    title: PropTypes.string,
    values: PropTypes.array,
    xAxisId: PropTypes.string,
    yAxisId: PropTypes.string,
    backgroundColor: PropTypes.string,
    barThickness: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxBarThickness: PropTypes.number,
    stack: PropTypes.string,
    order: PropTypes.number,
};

Dataset.defaultProps = {
    title: 'Dataset',
    values: [],
    xAxisId: undefined,
    yAxisId: undefined,
    backgroundColor: undefined,
    barThickness: 'flex',
    maxBarThickness: undefined,
    stack: undefined,
    order: 0,
};

export default Dataset;
