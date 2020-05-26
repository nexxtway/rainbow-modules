import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'react-rainbow-components';
import { useLocation, matchPath } from 'react-router-dom';
import StyledContainer from './styled';

const SideBarNavigation = (props) => {
    const { className, style, children } = props;
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
        <StyledContainer className={className} style={style}>
            <Sidebar selectedItem={selectedItem}>{children}</Sidebar>
        </StyledContainer>
    );
};

SideBarNavigation.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * @ignore
     */
    children: PropTypes.arrayOf(PropTypes.node),
};

SideBarNavigation.defaultProps = {
    className: undefined,
    style: undefined,
    children: undefined,
};

export default SideBarNavigation;
