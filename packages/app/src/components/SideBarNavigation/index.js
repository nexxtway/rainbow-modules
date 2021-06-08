import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-rainbow-components/components/Sidebar';
import { useLocation, matchPath } from 'react-router-dom';

const SideBarNavigation = (props) => {
    const { className, style, children, hideSelectedItemIndicator } = props;
    const location = useLocation();
    const routes = React.Children.map(children, (element) => {
        return {
            path: element.props.path,
            name: element.props.name,
            exact: element.props.exact,
        };
    });
    const currentRoute = routes.find((route) => {
        const match = matchPath(location.pathname, route);
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
