import React from 'react';
import { Close } from '@rainbow-modules/icons';
import { CloseButton, FullPageContainer, FullPageIframe as StyledFullPageIframe } from './styled';
import { IframeProps } from './types';

const FullPageIframe: React.FC<IframeProps> = ({
    id,
    className,
    style,
    src,
    title,
    isOpen,
    onRequestClose,
}: IframeProps) => {
    if (!isOpen) return null;

    return (
        <FullPageContainer id={id}>
            <StyledFullPageIframe className={className} style={style} src={src} title={title} />
            <CloseButton
                id="modal-close-button"
                icon={<Close />}
                size="x-small"
                onClick={onRequestClose}
            />
        </FullPageContainer>
    );
};

export default FullPageIframe;
