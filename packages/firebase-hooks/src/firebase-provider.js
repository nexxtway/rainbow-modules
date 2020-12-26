import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import Context from './context';

const client = new QueryClient();

export default function FirebaseProvider(props) {
    const { value, children } = props;
    return (
        <Context.Provider value={value}>
            <QueryClientProvider client={client}>{children}</QueryClientProvider>
        </Context.Provider>
    );
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
