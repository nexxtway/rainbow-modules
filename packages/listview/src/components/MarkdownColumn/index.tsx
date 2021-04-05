import React from 'react';
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

export default MarkdownColumn;
