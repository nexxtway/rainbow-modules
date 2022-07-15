import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from 'react-rainbow-components/components/SidebarItem';
import useNavigate from '../../hooks/useNavigate';
import useExactMatch from '../../hooks/useExactMatch';

const SideBarOption = (props) => {
    const { className, style, icon, selectedIcon, name, label, path, exact, tooltip } = props;
    const navigate = useNavigate();
    const isExactMatch = useExactMatch(path);
    const isSelected = !exact || isExactMatch;
    const actualIcon = isSelected && selectedIcon ? selectedIcon : icon;

    const handleClick = (event) => {
        event.preventDefault();
        navigate(path);
    };

    return (
        <SidebarItem
            className={className}
            style={style}
            icon={actualIcon}
            name={name}
            label={label}
            onClick={handleClick}
            tooltip={tooltip}
        />
    );
};

SideBarOption.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** The icon displayed in the SidebarItem. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** The icon displayed in the SidebarItem when selected. It must be a svg icon or a font icon. */
    selectedIcon: PropTypes.node,
    /** A unique identifier for the navigation item. */
    name: PropTypes.string,
    /** The text to show if it is passed. */
    label: PropTypes.node,
    /** The path to navigate to when the item is clicked. */
    path: PropTypes.string,
    /** When true, will only match if the path matches the location.pathname exactly */
    exact: PropTypes.bool,
    /** A tooltip to show on hover the item. */
    tooltip: PropTypes.string,
};

SideBarOption.defaultProps = {
    className: undefined,
    style: undefined,
    icon: undefined,
    selectedIcon: undefined,
    name: undefined,
    label: undefined,
    path: undefined,
    exact: false,
    tooltip: undefined,
};

export default SideBarOption;
