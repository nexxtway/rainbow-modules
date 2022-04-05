import React from 'react';
import { RenderIf } from 'react-rainbow-components';
import { Close } from '@rainbow-modules/icons';
import {
    FullCloseButton,
    FullPageContainer,
    Header,
    HeaderContainer,
    FullPageIframe as StyledFullPageIframe,
    FullPageInnerContainer,
    StyledSpinner,
} from './styled';
import { InternalIframeProps } from './types';

const FullPageIframe: React.FC<InternalIframeProps> = ({
    id,
    className,
    style,
    src,
    title,
    header,
    isOpen,
    isLoading,
    onRequestClose,
    onLoad,
}: InternalIframeProps) => {
    if (!isOpen) return null;

    return (
        <FullPageContainer id={id}>
            <Header>
                <HeaderContainer>{header}</HeaderContainer>
                <FullCloseButton
                    id="modal-close-button"
                    icon={<Close />}
                    size="x-small"
                    onClick={onRequestClose}
                />
            </Header>
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
        </FullPageContainer>
    );
};

export default FullPageIframe;
