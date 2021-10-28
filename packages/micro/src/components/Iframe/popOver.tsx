import React from 'react';
import { Close } from '@rainbow-modules/icons';
import {
    PopOverCloseButton,
    PopOverContainer,
    PopOverIframe as StyledPopOverIframe,
} from './styled';
import { IframeProps } from './types';

const PopOverIframe: React.FC<IframeProps> = ({
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
        <PopOverContainer id={id}>
            <StyledPopOverIframe className={className} style={style} src={src} title={title} />
            <PopOverCloseButton
                id="modal-close-button"
                icon={<Close />}
                size="x-small"
                onClick={onRequestClose}
            />
        </PopOverContainer>
    );
};

export default PopOverIframe;
