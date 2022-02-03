import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-rainbow-components';
import StyledFooter from './styled';

function Footer(props) {
    const { onRequestClose } = props;
    return (
        <StyledFooter>
            <Button
                className="rainbow-m-right_small"
                label="Cancel"
                size="small"
                variant="neutral"
                onClick={onRequestClose}
            />
            <Button label="Save" size="small" variant="brand" type="submit" />
        </StyledFooter>
    );
}

Footer.propTypes = {
    onRequestClose: PropTypes.func,
};

Footer.defaultProps = {
    onRequestClose: () => {},
};

export default Footer;
