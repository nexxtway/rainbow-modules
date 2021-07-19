import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xcode, atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { RainbowThemeContainer, RenderIf } from 'react-rainbow-components';
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
    theme,
}: CodeBlockProps) => {
    const originalTheme = useContext(ThemeContext);
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

    const highlighterTheme = theme === 'dark' ? atomOneDark : xcode;
    const containerTheme =
        theme === 'dark'
            ? {
                  rainbow: {
                      palette: {
                          mainBackground: '#272c35',
                      },
                  },
              }
            : originalTheme;

    return (
        <RainbowThemeContainer theme={containerTheme}>
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
                        style={highlighterTheme}
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
        </RainbowThemeContainer>
    );
};

CodeBlock.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    language: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    showLineNumbers: PropTypes.bool,
    hideHeader: PropTypes.bool,
};

CodeBlock.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    value: undefined,
    language: undefined,
    showLineNumbers: false,
    hideHeader: false,
};

export default CodeBlock;
