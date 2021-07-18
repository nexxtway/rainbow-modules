import React from 'react';
import PropTypes from 'prop-types';
import { MarkdownColumnProps } from './types';
import { Container, StyledMarkdownOutput } from './styled';

const MarkdownColumn: React.FC<MarkdownColumnProps> = ({
    className,
    style,
    value,
}: MarkdownColumnProps) => {
    return (
        <Container className={className} style={style}>
            <StyledMarkdownOutput value={value} variant="inline" />
        </Container>
    );
};

MarkdownColumn.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
};

MarkdownColumn.defaultProps = {
    className: undefined,
    style: undefined,
    value: undefined,
};

export default MarkdownColumn;
