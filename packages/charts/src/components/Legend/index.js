/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChartContext from '../Chart/context';

const Legend = (props) => {
    const { display, position, align, usePointStyle, reverse } = props;
    const { chart } = useContext(ChartContext);

    useEffect(() => {
        if (!chart) {
            return;
        }

        chart.options.legend = {
            display,
            position,
            align,
            labels: {
                usePointStyle,
            },
            reverse,
        };
        chart.update();
    }, [chart, display, position, align, usePointStyle]);
    return <></>;
};

Legend.propTypes = {
    display: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    align: PropTypes.oneOf(['start', 'center', 'end']),
    usePointStyle: PropTypes.bool,
    reverse: PropTypes.bool,
};

Legend.defaultProps = {
    display: true,
    position: 'top',
    align: 'center',
    usePointStyle: true,
    reverse: false,
};

export default Legend;
