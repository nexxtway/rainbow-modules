import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createStore from './createStore';

const ReduxContainer = (props) => {
    const { reducers, children } = props;
    const store = useMemo(() => createStore(reducers), [reducers]);
    return <Provider store={store}>{children}</Provider>;
};

ReduxContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    reducers: PropTypes.object,
};

ReduxContainer.defaultProps = {
    children: null,
    reducers: {},
};

export default ReduxContainer;
