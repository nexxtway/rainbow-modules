import React from 'react';
import { useIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Loader from './loader';
import Message from './message';
import messages from './messages';
import { SourceFilePreviewProps } from './types';
import virtualizedRenderer from './renderers/virtualizedRenderer';

const componentStyles = {
    background: 'none',
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
    padding: '2.6rem 0.6rem 0.5rem 1.5rem',
    textShadow: 'none',
};

const lineNumberStyle: React.CSSProperties = {
    textAlign: 'left',
};

const SourceFilePreview: React.FC<SourceFilePreviewProps> = ({
    isLoading,
    language,
    content,
}: SourceFilePreviewProps) => {
    const intl = useIntl();
    const showSource = Boolean(!isLoading && !!content && typeof content === 'string');
    const showNoPreviewAvailable = !isLoading && !!content && !showSource;

    if (isLoading) return <Loader message={intl.formatMessage(messages.loadingContent)} />;

    if (showNoPreviewAvailable)
        return <Message text={intl.formatMessage(messages.previewNotAvailable)} />;

    if (showSource) {
        return (
            <SyntaxHighlighter
                language={language}
                useInlineStyles
                customStyle={componentStyles}
                startingLineNumber={1}
                style={atomOneDark}
                showLineNumbers
                wrapLines
                lineNumberStyle={lineNumberStyle}
                renderer={virtualizedRenderer()}
                showInlineLineNumbers
            >
                {content ?? ''}
            </SyntaxHighlighter>
        );
    }

    return null;
};

SourceFilePreview.defaultProps = {
    isLoading: false,
    language: undefined,
    content: undefined,
};

export default SourceFilePreview;
