import React from 'react';
import { RenderIf } from 'react-rainbow-components';
import { Close } from '@rainbow-modules/icons';
import { StyledTrailing, Divider, StyledTrailingMessage, StyledButtonIcon } from './styled';
import { TrailingProps } from './types';

const Trailing = React.forwardRef<HTMLDivElement, TrailingProps>(
    ({ variant, value, onClear }: TrailingProps, ref) => {
        const shouldRenderMessage = variant === 'default';
        const shouldRenderDivider = value && shouldRenderMessage;
        return (
            <StyledTrailing ref={ref}>
                <RenderIf isTrue={value}>
                    <StyledButtonIcon icon={<Close />} size="x-small" onClick={onClear} />
                </RenderIf>
                <RenderIf isTrue={shouldRenderDivider}>
                    <Divider />
                </RenderIf>
                <RenderIf isTrue={shouldRenderMessage}>
                    <StyledTrailingMessage>Enter to search</StyledTrailingMessage>
                </RenderIf>
            </StyledTrailing>
        );
    },
);

export default Trailing;
