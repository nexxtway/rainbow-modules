import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';

export default function FirebaseProvider(props) {
    const { value, children } = props;
    return <Context.Provider value={value}>{children}</Context.Provider>;
}

FirebaseProvider.propTypes = {
    value: PropTypes.shape({
        app: PropTypes.object,
    }),
    children: PropTypes.node,
};

FirebaseProvider.defaultProps = {
    value: {},
    children: null,
};
