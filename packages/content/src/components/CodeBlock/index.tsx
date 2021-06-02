import React from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyToClipboardButton } from '@rainbow-modules/record';
import { CodeBlockProps } from './types';
import { StyledContainer, StyledHeader, StyledLabel, StyledContent, StyledPre } from './styled';

const CodeBlock: React.FC<CodeBlockProps> = ({
    label,
    value,
    language,
    showLineNumbers,
}: CodeBlockProps) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledLabel>{label}</StyledLabel>
                <CopyToClipboardButton value={value} />
            </StyledHeader>
            <StyledContent>
                <SyntaxHighlighter
                    language={language}
                    style={xcode}
                    showLineNumbers={showLineNumbers}
                    PreTag={StyledPre}
                    wrapLongLines
                >
                    {value}
                </SyntaxHighlighter>
            </StyledContent>
        </StyledContainer>
    );
};

CodeBlock.defaultProps = {
    label: undefined,
    value: undefined,
    language: undefined,
    showLineNumbers: true,
};

export default CodeBlock;
