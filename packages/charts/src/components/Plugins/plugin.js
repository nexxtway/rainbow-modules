import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import PluginsContext from './context';
import merge from '../Chart/helpers/merge';

const Plugin = (props) => {
    const { id, value, ...options } = props;
    const { registerPlugin } = useContext(PluginsContext);

    useEffect(() => {
        const opts = merge(value, options);
        registerPlugin(id, opts);
    });
    return <></>;
};

Plugin.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
};

Plugin.defaultProps = {};

export default Plugin;
