import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'react-rainbow-components';
import { useLocation } from 'react-router-dom';
import useMatchPath from '../../hooks/useMatchPath';

const SideBarNavigation = (props) => {
    const { className, style, children, hideSelectedItemIndicator } = props;
    const location = useLocation();
    const matchPath = useMatchPath();
    const routes = React.Children.map(children, (element) => {
        return {
            path: element.props.path,
            name: element.props.name,
            end: element.props.exact,
        };
    });
    const currentRoute = routes.find((route) => {
        if (!route.path) return false;
        const match = matchPath(route, location.pathname);
        return match;
    });
    const selectedItem = currentRoute ? currentRoute.name : '';

    return (
        <Sidebar
            className={className}
            style={style}
            selectedItem={selectedItem}
            hideSelectedItemIndicator={hideSelectedItemIndicator}
        >
            {children}
        </Sidebar>
    );
};

SideBarNavigation.propTypes = {
    className: PropTypes.string,
    hideSelectedItemIndicator: PropTypes.bool,
    style: PropTypes.object,
    /**
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

SideBarNavigation.defaultProps = {
    className: undefined,
    style: undefined,
    children: undefined,
    hideSelectedItemIndicator: false,
};

export default SideBarNavigation;
