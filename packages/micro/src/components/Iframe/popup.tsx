import React from 'react';
import { Close } from '@rainbow-modules/icons';
import { PopupCloseButton, PopupContainer, PopupIframe as StyledPopupIframe } from './styled';
import { IframeProps } from './types';

const PopupIframe: React.FC<IframeProps> = ({
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
        <PopupContainer id={id}>
            <StyledPopupIframe className={className} style={style} src={src} title={title} />
            <PopupCloseButton
                id="modal-close-button"
                icon={<Close />}
                size="x-small"
                onClick={onRequestClose}
            />
        </PopupContainer>
    );
};

export default PopupIframe;
