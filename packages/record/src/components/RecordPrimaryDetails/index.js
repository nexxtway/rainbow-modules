import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from '../../context';
import { StyledContainer } from './styled';

const context = {
    privateVariant: 'border-vertical',
};
export default function RecordPrimaryDetails(props) {
    const { style, id, children, className } = props;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Provider value={context}>{children}</Provider>
        </StyledContainer>
    );
}

RecordPrimaryDetails.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    id: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RecordPrimaryDetails.defaultProps = {
    className: undefined,
    style: undefined,
    id: undefined,
    children: null,
};
