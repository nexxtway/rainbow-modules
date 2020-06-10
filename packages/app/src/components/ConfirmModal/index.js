/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-rainbow-components';
import { Header, Question, Container, IconContainer, ButtonsContainer, Button } from './styled';
import { defaultCancelButtonLabel, defaultOkButtonLabel, defaultTitle } from './labels';

const ConfirmModal = (props) => {
    const {
        header,
        icon,
        question,
        variant,
        isOpen,
        onCancel,
        onConfirm,
        cancelButtonLabel,
        okButtonLabel,
    } = props;
    const title = header || defaultTitle;
    const cancelLabel = cancelButtonLabel || defaultCancelButtonLabel;
    const okLabel = okButtonLabel || defaultOkButtonLabel;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCancel}
            footer={
                <ButtonsContainer>
                    <Button label={cancelLabel} variant="border" onClick={onCancel} />
                    <Button label={okLabel} variant={variant} onClick={onConfirm} />
                </ButtonsContainer>
            }
        >
            <Container direction="row">
                <IconContainer>{icon}</IconContainer>
                <Container direction="column">
                    <Header>{title}</Header>
                    <Question>{question}</Question>
                </Container>
            </Container>
        </Modal>
    );
};

ConfirmModal.propTypes = {
    /** @ignore */
    isOpen: PropTypes.bool,
    header: PropTypes.string,
    question: PropTypes.string,
    icon: PropTypes.node,
    okButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string,
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'destructive']),
    /** @ignore */
    onCancel: PropTypes.func,
    /** @ignore */
    onConfirm: PropTypes.func,
};

ConfirmModal.defaultProps = {
    isOpen: false,
    header: undefined,
    question: undefined,
    icon: undefined,
    okButtonLabel: undefined,
    cancelButtonLabel: undefined,
    variant: 'brand',
    onCancel: undefined,
    onConfirm: undefined,
};

export default ConfirmModal;
