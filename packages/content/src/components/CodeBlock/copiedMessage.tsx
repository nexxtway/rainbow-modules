import React from 'react';
import { useIntl } from 'react-intl';
import { StyledCopiedMessage } from './styled';
import messages from './messages';

const CopiedMessage: React.FC = () => {
    const intl = useIntl();
    return (
        <StyledCopiedMessage>{intl.formatMessage(messages.copiedToClipboard)}</StyledCopiedMessage>
    );
};

export default CopiedMessage;
