import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from '@rainbow-modules/firebase-hooks';
import { isRouterV6 } from '@rainbow-modules/app';
import getRedirectTo from '../../helpers/getRedirectTo';

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
                to={getRedirectTo({
                    redirect,
                    location,
                })}
            />
        );
    }
    return null;
};

const WhenNoAuthenticatedV6 = (props) => {
    // eslint-disable-next-line react/prop-types
    const { component, redirect, children, ...rest } = props;
    const location = useLocation();
    const navigate = useNavigate();
    const isAuth = useAuthState();
    const Component = component;

    useEffect(() => {
        if (redirect && isAuth === true) {
            navigate(redirect);
        }
    }, [isAuth, navigate, redirect]);

    if (isAuth === false) {
        if (Component) {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Component location={location} {...rest} />;
        }
        return children;
    }
    return null;
};

const WhenNoAuthenticatedV5 = (props) => {
    // eslint-disable-next-line react/prop-types
    const { path, redirect, component, children } = props;

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

const WhenNoAuthenticated = isRouterV6 ? WhenNoAuthenticatedV6 : WhenNoAuthenticatedV5;

WhenNoAuthenticated.propTypes = {
    path: PropTypes.string,
    component: PropTypes.func,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.node,
};

WhenNoAuthenticated.defaultProps = {
    path: '',
    component: undefined,
    redirect: undefined,
    children: null,
};

export default WhenNoAuthenticated;
