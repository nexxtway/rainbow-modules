import React from 'react';
import { useIntl } from 'react-intl';
import { StyledCopiedMessage } from './styled';
import messages from './messages';
import { CopiedMessageProps } from './types';

const CopiedMessage: React.FC<CopiedMessageProps> = ({ className, style }: CopiedMessageProps) => {
    const intl = useIntl();
    return (
        <StyledCopiedMessage className={className} style={style}>
            {intl.formatMessage(messages.copiedToClipboard)}
        </StyledCopiedMessage>
    );
};

export default CopiedMessage;
