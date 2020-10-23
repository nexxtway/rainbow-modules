import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const NavigationButtonColumn = (props) => {
    const { value, row, onClick } = props;
    return <StyledButton onClick={() => onClick({ value, row })}>{value}</StyledButton>;
};

export default NavigationButtonColumn;

NavigationButtonColumn.propTypes = {
    /** A string that comes from the data and is displayed in the table cell  */
    value: PropTypes.string,
    /** An object with the data of the row */
    row: PropTypes.object,
    /** The action triggered when click on the button. */
    onClick: PropTypes.func,
};

NavigationButtonColumn.defaultProps = {
    value: undefined,
    row: undefined,
    onClick: () => {},
};
