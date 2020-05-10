import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from '@rainbow-modules/firebase-hooks';

const Private = (props) => {
    // eslint-disable-next-line react/prop-types
    const { location, component, redirect, children, ...rest } = props;
    const isAuth = useAuthState();
    const Component = component;
    if (isAuth) {
        if (Component) {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Component location={location} {...rest} />;
        }
        return <div>{children}</div>;
    }
    if (isAuth === false) {
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

const WhenAuthenticated = (props) => {
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

WhenAuthenticated.propTypes = {
    /** The route path the component will used to match against the browser URL. */
    path: PropTypes.string.isRequired,
    /** The component class or function that will be rendered if the application is
     * authenticated. */
    component: PropTypes.func,
    /** The route where the component should redirect if the application ins't authenticated. */
    redirect: PropTypes.string,
    children: PropTypes.node,
};

WhenAuthenticated.defaultProps = {
    component: undefined,
    redirect: '',
    children: null,
};

export default WhenAuthenticated;
