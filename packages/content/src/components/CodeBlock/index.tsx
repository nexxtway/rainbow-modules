import React, { useState } from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { RenderIf } from 'react-rainbow-components';
import { CodeBlockProps } from './types';
import { StyledContainer, StyledHeader, StyledLabel, StyledContent, StyledPre } from './styled';
import CopyButton from './copyButton';
import CopiedMessage from './copiedMessage';

const CodeBlock: React.FC<CodeBlockProps> = ({
    className,
    style,
    label,
    value,
    language,
    showLineNumbers,
    hideHeader,
}: CodeBlockProps) => {
    const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>();

    const handleClick = () => {
        if (!showCopiedMessage) {
            setShowCopiedMessage(true);
            setTimeout(() => {
                setShowCopiedMessage(false);
            }, 3000);
        }
    };

    const copyButton = (
        <CopyButton
            value={value}
            hideHeader={hideHeader}
            showCopiedMessage={showCopiedMessage}
            onClick={handleClick}
        />
    );

    return (
        <StyledContainer className={className} style={style}>
            <RenderIf isTrue={!hideHeader}>
                <StyledHeader>
                    <StyledLabel>{label}</StyledLabel>
                    {copyButton}
                </StyledHeader>
            </RenderIf>
            <StyledContent>
                <RenderIf isTrue={hideHeader}>{copyButton}</RenderIf>
                <SyntaxHighlighter
                    language={language}
                    style={xcode}
                    showLineNumbers={showLineNumbers}
                    PreTag={StyledPre}
                    wrapLongLines
                >
                    {value}
                </SyntaxHighlighter>
                <RenderIf isTrue={showCopiedMessage}>
                    <CopiedMessage />
                </RenderIf>
            </StyledContent>
        </StyledContainer>
    );
};

CodeBlock.defaultProps = {
    label: undefined,
    value: undefined,
    language: undefined,
    showLineNumbers: false,
};

export default CodeBlock;
