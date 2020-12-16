import React from 'react';
import PropTypes from 'prop-types';
import { HighlightedText } from 'react-rainbow-components';
import { Label } from './styled';

export default function LabelText({ value }) {
    if (Array.isArray(value)) {
        return <HighlightedText parts={value} textComponent={Label} />;
    }
    return <Label>{value}</Label>;
}

LabelText.propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

LabelText.defaultProps = {
    value: undefined,
};
