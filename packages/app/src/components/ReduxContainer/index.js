import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';

const ReduxContainer = (props) => {
    const { reducers, children } = props;
    const store = useMemo(() => createStore(reducers), [reducers]);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default ReduxContainer;
