/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import ScalesContext from './context';

const Axis = (props) => {
    const {
        id: axisId,
        axis,
        displayLabel,
        labelString,
        labelFontFamily,
        labelFontSize,
        labelFontStyle,
        labelFontColor,
        beginAtZero,
        suggestedMax,
        suggestedMin,
        stacked,
        display,
        type,
        barThickness,
        maxBarThickness,
        categoryPercentage,
        barPercentage,
        offsetGridLines,
        showGridLines,
        offset,
        weight,
    } = props;
    const { registerAxis } = useContext(ScalesContext);
    const id = useUniqueIdentifier();

    useEffect(() => {
        registerAxis(axis, id, {
            id: axisId,
            stacked,
            type,
            display,
            ticks: {
                beginAtZero,
                suggestedMax,
                suggestedMin,
            },
            scaleLabel: {
                display: displayLabel,
                labelString,
                fontFamily: labelFontFamily,
                fontSize: labelFontSize,
                fontStyle: labelFontStyle,
                fontColor: labelFontColor,
            },
            barThickness,
            maxBarThickness,
            categoryPercentage,
            barPercentage,
            gridLines: {
                display: showGridLines,
                offsetGridLines,
            },
            offset,
            weight,
        });
    });

    return <></>;
};

Axis.propTypes = {
    id: PropTypes.string,
    axis: PropTypes.oneOf(['x', 'y']).isRequired,
    displayLabel: PropTypes.bool,
    labelString: PropTypes.string,
    labelFontFamily: PropTypes.string,
    labelFontSize: PropTypes.number,
    labelFontStyle: PropTypes.string,
    labelFontColor: PropTypes.string,
    beginAtZero: PropTypes.bool,
    suggestedMax: PropTypes.number,
    suggestedMin: PropTypes.number,
    stacked: PropTypes.bool,
    type: PropTypes.string,
    barThickness: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    categoryPercentage: PropTypes.number,
    barPercentage: PropTypes.number,
    maxBarThickness: PropTypes.number,
    offset: PropTypes.bool,
    offsetGridLines: PropTypes.bool,
    showGridLines: PropTypes.bool,
    display: PropTypes.bool,
    weight: PropTypes.number,
};

Axis.defaultProps = {
    id: undefined,
    displayLabel: false,
    labelString: '',
    labelFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    labelFontSize: 12,
    labelFontStyle: 'normal',
    labelFontColor: '#666',
    beginAtZero: true,
    suggestedMax: 0,
    suggestedMin: 0,
    stacked: false,
    type: undefined,
    barThickness: 'flex',
    categoryPercentage: undefined,
    barPercentage: undefined,
    maxBarThickness: undefined,
    offset: true,
    offsetGridLines: false,
    showGridLines: false,
    display: true,
    weight: 0,
};

export default Axis;
