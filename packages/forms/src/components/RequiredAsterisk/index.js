import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import StyledAsterisk from './styledAsterisk';

export default function RequiredAsterisk({ required }) {
    return (
        <RenderIf isTrue={required}>
            <StyledAsterisk title="required">* </StyledAsterisk>
        </RenderIf>
    );
}

RequiredAsterisk.propTypes = {
    required: PropTypes.bool.isRequired,
};
