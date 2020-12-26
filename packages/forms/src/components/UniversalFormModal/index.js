import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-rainbow-components';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import UniversalForm from '../UniversalForm';

const UniversalFormModal = (props) => {
    const {
        isOpen,
        onRequestClose,
        fields: Fields,
        onSubmit,
        title,
        initialValues,
        ...rest
    } = props;
    const uniqueId = useUniqueIdentifier();
    const footer = (
        <div className="rainbow-flex rainbow-justify_end">
            <Button
                className="rainbow-m-right_large"
                label="Cancel"
                variant="neutral"
                onClick={onRequestClose}
            />
            <Button label="Save" variant="brand" type="submit" form={uniqueId} />
        </div>
    );
    return (
        <Modal title={title} isOpen={isOpen} footer={footer} onRequestClose={onRequestClose}>
            <UniversalForm onSubmit={onSubmit} id={uniqueId} initialValues={initialValues}>
                <Fields {...rest} />
            </UniversalForm>
        </Modal>
    );
};

UniversalFormModal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onSubmit: PropTypes.func,
    fields: PropTypes.func,
    initialValues: PropTypes.object,
};

UniversalFormModal.defaultProps = {
    title: '',
    isOpen: false,
    onRequestClose: () => {},
    onSubmit: () => {},
    fields: () => null,
    initialValues: {},
};

export default UniversalFormModal;
