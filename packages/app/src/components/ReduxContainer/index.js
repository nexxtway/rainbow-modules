import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createStore from './createStore';

const ReduxContainer = (props) => {
    const { reducers, middlewares, children } = props;
    const store = useMemo(() => createStore(reducers, middlewares), [reducers, middlewares]);
    return <Provider store={store}>{children}</Provider>;
};

ReduxContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    reducers: PropTypes.object,
    middlewares: PropTypes.array,
};

ReduxContainer.defaultProps = {
    children: null,
    reducers: {},
    middlewares: [],
};

export default ReduxContainer;
