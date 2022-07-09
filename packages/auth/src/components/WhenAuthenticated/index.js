import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from '@rainbow-modules/firebase-hooks';
import { isRouterV6 } from '@rainbow-modules/app/src/helpers/getReactRouterVersion';
import getRedirectTo from '../../helpers/getRedirectTo';

const Private = (props) => {
    // eslint-disable-next-line react/prop-types
    const { location, component: Component, redirect, children, ...rest } = props;
    const isAuth = useAuthState();

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
                to={getRedirectTo({
                    redirect,
                    location,
                })}
            />
        );
    }
    return null;
};

const WhenAuthenticatedV6 = (props) => {
    // eslint-disable-next-line react/prop-types
    const { component: Component, redirect, children, ...rest } = props;
    const location = useLocation();
    const navigate = useNavigate();
    const isAuth = useAuthState();

    useEffect(() => {
        if (isAuth === false) {
            navigate(redirect);
        }
    }, [isAuth, navigate, redirect]);

    if (isAuth) {
        if (Component) {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Component location={location} {...rest} />;
        }
        return <div>{children}</div>;
    }
    return null;
};

const WhenAuthenticatedV5 = (props) => {
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

const WhenAuthenticated = isRouterV6 ? WhenAuthenticatedV6 : WhenAuthenticatedV5;

WhenAuthenticated.propTypes = {
    /** The route path the component will used to match against the browser URL. */
    path: PropTypes.string.isRequired,
    /** The component class or function that will be rendered if the application is
     * authenticated. */
    component: PropTypes.func,
    /** The route where the component should redirect if the application ins't authenticated. It can also be an
     * object with the same shape of the `to` prop in the react router Redirect component.
     */
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.node,
};

WhenAuthenticated.defaultProps = {
    component: undefined,
    redirect: undefined,
    children: null,
};

export default WhenAuthenticated;
