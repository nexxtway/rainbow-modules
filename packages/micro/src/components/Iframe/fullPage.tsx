import React from 'react';
import { RenderIf } from 'react-rainbow-components';
import { Close } from '@rainbow-modules/icons';
import {
    CloseButton,
    FullPageContainer,
    FullPageIframe as StyledFullPageIframe,
    FullPageInnerContainer,
    StyledSpinner,
} from './styled';
import { IframeProps } from './types';

const FullPageIframe: React.FC<IframeProps> = ({
    id,
    className,
    style,
    src,
    title,
    isOpen,
    isLoading,
    onRequestClose,
    onLoad,
}: IframeProps) => {
    if (!isOpen) return null;

    return (
        <FullPageContainer id={id}>
            <FullPageInnerContainer>
                <RenderIf isTrue={isLoading}>
                    <StyledSpinner type="arc" variant="brand" />
                </RenderIf>
                <StyledFullPageIframe
                    className={className}
                    style={style}
                    src={src}
                    title={title}
                    isLoading={isLoading}
                    onLoad={onLoad}
                />
            </FullPageInnerContainer>

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
