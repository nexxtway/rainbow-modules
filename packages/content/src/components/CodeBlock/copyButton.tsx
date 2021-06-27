import React from 'react';
import { CopyToClipboardButton } from '@rainbow-modules/record';
import { Done } from '@rainbow-modules/icons';
import { RenderIf } from 'react-rainbow-components';
import { CopyButtonProps } from './types';
import { StyledCopyButton } from './styled';

const CopyButton: React.FC<CopyButtonProps> = ({
    value,
    hideHeader,
    showCopiedMessage,
    onClick,
}: CopyButtonProps) => {
    return (
        <StyledCopyButton hideHeader={hideHeader} onClick={onClick}>
            <RenderIf isTrue={showCopiedMessage}>
                <Done />
            </RenderIf>
            <RenderIf isTrue={!showCopiedMessage}>
                <CopyToClipboardButton value={value} />
            </RenderIf>
        </StyledCopyButton>
    );
};

export default CopyButton;
