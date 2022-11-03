/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-global-assign */
import React, { FocusEvent, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, InternalOverlay } from 'react-rainbow-components';
import { useOutsideClick, useUniqueIdentifier } from '@rainbow-modules/hooks';
import manageTab from './manageTab';
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
    const hasFocus = useRef(false);
    useOutsideClick(
        () => containerRef.current,
        () => {
            if (hasFocus.current && onRequestClose) {
                onRequestClose();
            }
        },
        isOpen,
    );

    const handleOpen = () => {
        if (containerRef.current) containerRef.current.focus();
        if (onOpened) onOpened();
    };

    const handleKeyPress = (event: React.KeyboardEvent): void => {
        if (isOpen && event.key === 'Escape' && onRequestClose) {
            onRequestClose();
        }
        if (event.key === 'Tab' && containerRef.current !== undefined) {
            manageTab(containerRef.current, event);
        }
    };

    const handleFocus = (event: FocusEvent) => {
        if (event.target === containerRef.current || containerRef.current?.contains(event.target)) {
            hasFocus.current = true;
        }
    };

    const handleBlur = (event: FocusEvent) => {
        if (event.target === containerRef.current || containerRef.current?.contains(event.target)) {
            hasFocus.current = false;
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
                    <StyledContainer
                        ref={containerRef}
                        onKeyDown={handleKeyPress}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        tabIndex="-1"
                    >
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

const HTMLElementType = typeof HTMLElement === 'undefined' ? function () {} : HTMLElement;
UniversalFormOverlay.propTypes = {
    /**
     * Ref or function that returns a ref to a DOM element, the DOM element resolved by
     * this ref will be used to positioning the component passed when visible
     */
    triggerElementRef: PropTypes.oneOfType([
        // Either a function
        PropTypes.func,
        // Or the instance of a DOM native element (see the note about SSR)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLElementType).isRequired }),
    ]),
    /**
     * Component Class or Function with the fields of your form. Use Field component
     * of react-final-form.
     */
    fields: PropTypes.func,
    /**
     * When true the Modal opens
     */
    isOpen: PropTypes.bool,
    /**
     * A callback triggered when the overlay component is opened. This is useful
     * for example to set focus to an element after it is opened.
     */
    onOpened: PropTypes.func,
    /**
     * Callback that will be invoked after on submit event, it will receive an
     * object with all the values of the form already validated.
     */
    onSumbit: PropTypes.func,
    /**
     * Callback that will be invoke when close event. Click on Cancel or Close Button
     * or press ESC.
     */
    onRequestClose: PropTypes.func,
    /**
     * The initial values of the form e.g. { name: 'Max', age: 30 }.
     */
    initialValues: PropTypes.objectOf(PropTypes.any),
    /**
     * The label of the submit button on the form.
     */
    submitButtonLabel: PropTypes.node,
    /**
     * The label of the cancel button on the form.
     */
    cancelButtonLabel: PropTypes.node,
};

UniversalFormOverlay.defaultProps = {
    triggerElementRef: undefined,
    fields: undefined,
    isOpen: false,
    onOpened: undefined,
    onSumbit: undefined,
    onRequestClose: undefined,
    initialValues: undefined,
    submitButtonLabel: undefined,
    cancelButtonLabel: undefined,
};

export default UniversalFormOverlay;
