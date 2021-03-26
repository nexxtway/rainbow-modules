import React from 'react';
import { MarkdownOutput } from 'react-rainbow-components';
import { MarkdownColumnProps } from './types';
import { Container } from './styled';

const MarkdownColumn: React.FC<MarkdownColumnProps> = ({
    className,
    style,
    value,
}: MarkdownColumnProps) => {
    return (
        <Container className={className} style={style}>
            <MarkdownOutput value={value} />
        </Container>
    );
};

export default MarkdownColumn;
