import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const NavigationButtonColumn = (props) => {
    const { className, style, value, row, onClick } = props;
    return (
        <StyledButton className={className} style={style} onClick={() => onClick({ value, row })}>
            {value}
        </StyledButton>
    );
};

export default NavigationButtonColumn;

NavigationButtonColumn.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** A string that comes from the data and is displayed in the table cell  */
    value: PropTypes.string,
    /** An object with the data of the row */
    row: PropTypes.object,
    /** The action triggered when click on the button. */
    onClick: PropTypes.func,
};

NavigationButtonColumn.defaultProps = {
    className: undefined,
    style: undefined,
    value: undefined,
    row: undefined,
    onClick: () => {},
};
