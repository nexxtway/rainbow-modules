import React, { useRef } from 'react';
import { Button } from 'react-rainbow-components';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import { useOutsideClick, useUniqueIdentifier } from '@rainbow-modules/hooks';
import UniversalForm from '../UniversalForm';
import positionResolver from './helpers/positionResolver';
import { StyledContainer, StyledContent, StyledFooter } from './styled';
import { UniversalFormOverlayProps } from './types';

const UniversalFormOverlay: React.FC<UniversalFormOverlayProps> = ({
    triggerElementRef,
    isOpen,
    fields,
    initialValues,
    onOpened,
    onSumbit,
    onRequestClose,
    submitButtonLabel,
    cancelButtonLabel,
    ...rest
}: UniversalFormOverlayProps) => {
    const uniqueId = useUniqueIdentifier('form');
    const containerRef = useRef<HTMLElement>();
    useOutsideClick(
        () => containerRef.current,
        () => onRequestClose && onRequestClose(),
        isOpen,
    );

    const handleOpen = () => {
        if (containerRef.current) containerRef.current.focus();
        if (onOpened) onOpened();
    };

    const handleKeyPress = (event: React.KeyboardEvent): void => {
        if (event.key === 'Escape' && onRequestClose) {
            onRequestClose();
        }
    };

    const Fields: React.ComponentType = fields || (() => null);
    return (
        <InternalOverlay
            isVisible={isOpen}
            triggerElementRef={triggerElementRef}
            onOpened={handleOpen}
            positionResolver={positionResolver}
            render={() => {
                return (
                    <StyledContainer ref={containerRef} onKeyDown={handleKeyPress} tabIndex="-1">
                        <StyledContent>
                            <UniversalForm
                                id={uniqueId}
                                initialValues={initialValues}
                                onSubmit={onSumbit}
                            >
                                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                                <Fields {...rest} />
                            </UniversalForm>
                        </StyledContent>
                        <StyledFooter>
                            <Button
                                className="rainbow-m-right_small"
                                label="Cancel"
                                size="small"
                                variant="neutral"
                                onClick={onRequestClose}
                            >
                                {cancelButtonLabel}
                            </Button>
                            <Button
                                label="Save"
                                size="small"
                                variant="brand"
                                type="submit"
                                form={uniqueId}
                            >
                                {submitButtonLabel}
                            </Button>
                        </StyledFooter>
                    </StyledContainer>
                );
            }}
        />
    );
};

export default UniversalFormOverlay;
