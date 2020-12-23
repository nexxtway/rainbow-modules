/* eslint-disable react/prop-types */
import React, { useEffect, useCallback, useRef, useContext } from 'react';
import ChartContext from '../Chart/context';
import ScalesContext from './context';

const Scales = (props) => {
    const { children } = props;
    const { chart } = useContext(ChartContext);
    const xAxes = useRef({});
    const yAxes = useRef({});

    const update = useCallback(() => {
        if (!chart) {
            return;
        }

        const value = {
            xAxes: Object.values(xAxes.current),
            yAxes: Object.values(yAxes.current),
        };
        chart.options.scales = value;
        chart.update();
    }, [chart]);

    const registerAxis = useCallback(
        (axis, id, value) => {
            if (axis === 'x') {
                xAxes.current[id] = value;
            } else {
                yAxes.current[id] = value;
            }
            update();
        },
        [update],
    );

    useEffect(() => update(), [update]);

    const context = {
        registerAxis,
    };

    return <ScalesContext.Provider value={context}>{children}</ScalesContext.Provider>;
};

Scales.propTypes = {};

export default Scales;
