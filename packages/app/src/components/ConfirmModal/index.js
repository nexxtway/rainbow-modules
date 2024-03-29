/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, RenderIf, Button } from 'react-rainbow-components';
import { Question, ButtonsContainer, Container, IconContainer } from './styled';

const styles = {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    marginLeft: '0.7rem',
};

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
        borderRadius,
        children,
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCancel}
            title={header}
            borderRadius={borderRadius}
            footer={
                <ButtonsContainer>
                    <Button
                        style={styles}
                        label={cancelButtonLabel}
                        variant="border"
                        onClick={onCancel}
                        borderRadius={borderRadius}
                    />
                    <Button
                        style={styles}
                        label={okButtonLabel}
                        variant={variant}
                        onClick={onConfirm}
                        borderRadius={borderRadius}
                    />
                </ButtonsContainer>
            }
        >
            <RenderIf isTrue={!children}>
                <Container>
                    <IconContainer>{icon}</IconContainer>
                    <Question>{question}</Question>
                </Container>
            </RenderIf>
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
    /** The border radius of the the modal and the footer buttons. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['rounded', 'semi-rounded', 'semi-square', 'square']),
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
    borderRadius: 'rounded',
};

export default ConfirmModal;
