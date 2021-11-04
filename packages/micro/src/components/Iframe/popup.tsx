import React from 'react';
import { RenderIf } from 'react-rainbow-components';
import { Close } from '@rainbow-modules/icons';
import {
    PopupCloseButton,
    PopupContainer,
    PopupIframe as StyledPopupIframe,
    StyledSpinner,
    PopupInnerContainer,
} from './styled';
import { InternalIframeProps } from './types';

const PopupIframe: React.FC<InternalIframeProps> = ({
    id,
    className,
    style,
    src,
    title,
    isOpen,
    isLoading,
    onRequestClose,
    onLoad,
}: InternalIframeProps) => {
    if (!isOpen) return null;

    return (
        <PopupContainer id={id}>
            <PopupInnerContainer>
                <RenderIf isTrue={isLoading}>
                    <StyledSpinner type="arc" variant="brand" />
                </RenderIf>
                <StyledPopupIframe
                    className={className}
                    style={style}
                    src={src}
                    title={title}
                    isLoading={isLoading}
                    onLoad={onLoad}
                />
            </PopupInnerContainer>

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
