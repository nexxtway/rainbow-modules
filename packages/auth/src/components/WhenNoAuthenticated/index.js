import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from '@rainbow-modules/firebase-hooks';

const Private = (props) => {
    // eslint-disable-next-line react/prop-types
    const { location, component, redirect, children, ...rest } = props;
    const isAuth = useAuthState();
    const Component = component;
    if (isAuth === false) {
        if (Component) {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Component location={location} {...rest} />;
        }
        return children;
    }
    if (isAuth) {
        return (
            <Redirect
                to={{
                    pathname: redirect,
                    state: { from: location },
                }}
            />
        );
    }
    return null;
};

const WhenNoAuthenticated = (props) => {
    const { path, redirect, component, children } = props;
    // eslint-disable-next-line react/prop-types

    return (
        <Route
            path={path}
            render={(...rest) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Private {...rest} redirect={redirect} component={component}>
                    {children}
                </Private>
            )}
        />
    );
};

WhenNoAuthenticated.propTypes = {
    path: PropTypes.string,
    component: PropTypes.func,
    redirect: PropTypes.string,
    children: PropTypes.node,
};

WhenNoAuthenticated.defaultProps = {
    path: '',
    component: undefined,
    redirect: '',
    children: null,
};

export default WhenNoAuthenticated;
