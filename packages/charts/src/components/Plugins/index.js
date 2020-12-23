/* eslint-disable react/prop-types */
import React, { useCallback, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import PluginsContext from './context';
import ChartContext from '../Chart/context';

const Plugins = (props) => {
    const { children } = props;
    const { chart } = useContext(ChartContext);
    const plugins = useRef({});

    const registerPlugin = useCallback(
        (id, opts) => {
            if (!chart) {
                return;
            }
            plugins.current[id] = opts;
            chart.options.plugins = plugins.current;
            chart.update();
        },
        [chart],
    );

    const context = { registerPlugin };

    return <PluginsContext.Provider value={context}>{children}</PluginsContext.Provider>;
};

Plugins.propTypes = {
    children: PropTypes.node,
};

Plugins.defaultProps = {
    children: null,
};

export default Plugins;
