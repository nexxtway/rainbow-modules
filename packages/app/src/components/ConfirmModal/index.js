/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-rainbow-components';
import { Question, ButtonsContainer, Button, Container, IconContainer } from './styled';

const ConfirmModal = (props) => {
    const {
        header,
        question,
        variant,
        isOpen,
        onCancel,
        onConfirm,
        cancelButtonLabel,
        okButtonLabel,
        icon,
        children,
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCancel}
            title={header}
            footer={
                <ButtonsContainer>
                    <Button label={cancelButtonLabel} variant="border" onClick={onCancel} />
                    <Button label={okButtonLabel} variant={variant} onClick={onConfirm} />
                </ButtonsContainer>
            }
        >
            <Container>
                <IconContainer>{icon}</IconContainer>
                <Question>{question}</Question>
            </Container>
            {children}
        </Modal>
    );
};

ConfirmModal.propTypes = {
    /** @ignore */
    isOpen: PropTypes.bool,
    /** The header that will be displayed in the modal. */
    header: PropTypes.string,
    /** The text or question that will be displayed in the modal. */
    question: PropTypes.string,
    /** The icon that will be displayed in the modal. */
    icon: PropTypes.node,
    /** The label for OK button. */
    okButtonLabel: PropTypes.string,
    /** The label for Cancel button. */
    cancelButtonLabel: PropTypes.string,
    /** The modal variant. */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'destructive']),
    /** @ignore */
    onCancel: PropTypes.func,
    /** @ignore */
    onConfirm: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

ConfirmModal.defaultProps = {
    isOpen: false,
    header: 'Confirm',
    question: undefined,
    icon: undefined,
    okButtonLabel: 'Ok',
    cancelButtonLabel: 'Cancel',
    variant: 'brand',
    onCancel: undefined,
    onConfirm: undefined,
    children: null,
};

export default ConfirmModal;
