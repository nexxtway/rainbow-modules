import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-rainbow-components';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import UniversalForm from '../UniversalForm';

const UniversalFormModal = (props) => {
    const {
        id,
        className,
        style,
        isOpen,
        onRequestClose,
        fields: Fields,
        onSubmit,
        title,
        initialValues,
        submitButtonLabel,
        cancelButtonLabel,
        onOpened,
        disableSubmit,
        borderRadius,
        size,
        ...rest
    } = props;
    const uniqueId = useUniqueIdentifier();
    const footer = (
        <div className="rainbow-flex rainbow-justify_end">
            <Button
                className="rainbow-m-right_large"
                variant="neutral"
                onClick={onRequestClose}
                borderRadius={borderRadius}
            >
                {cancelButtonLabel}
            </Button>
            <Button
                disabled={disableSubmit}
                label="Save"
                variant="brand"
                type="submit"
                form={uniqueId}
                borderRadius={borderRadius}
            >
                {submitButtonLabel}
            </Button>
        </div>
    );
    return (
        <Modal
            id={id}
            className={className}
            style={style}
            title={title}
            isOpen={isOpen}
            footer={footer}
            onRequestClose={onRequestClose}
            onOpened={onOpened}
            borderRadius={borderRadius}
            size={size}
        >
            <UniversalForm onSubmit={onSubmit} id={uniqueId} initialValues={initialValues}>
                <Fields {...rest} />
            </UniversalForm>
        </Modal>
    );
};

UniversalFormModal.propTypes = {
    /** The class name of the modal element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the modal element. */
    style: PropTypes.object,
    /** The title of the Modal */
    title: PropTypes.node,
    /** When `true` the Modal opens */
    isOpen: PropTypes.bool,
    /** Callback that will be invoke when close event. Click on Cancel or Close Button or press ESC. */
    onRequestClose: PropTypes.func,
    /** Callback that will be invoke after on submit event, it will receive an object with all
     * the values of the form already validated.
     */
    onSubmit: PropTypes.func,
    /** A callback triggered when the modal is opened. This is useful for example to set focus to an element inside the modal content after it is opened. */
    onOpened: PropTypes.func,
    /**
     * Component Class or Function with the fields of your form. Use Field component of react-final-form.
     */
    fields: PropTypes.func,
    /** The initial values of the form e.g. { name: 'Max', age: 30 } */
    initialValues: PropTypes.object,
    /** The label of the submit button on the form */
    submitButtonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The label of the cancel button on the form */
    cancelButtonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** disable submit button */
    disableSubmit: PropTypes.bool,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The border radius of the button and modal. Valid values are square, 'semi-square', semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
    /** The size of the Modal. Valid values are small, medium, and large.
     * This value defaults to small. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

UniversalFormModal.defaultProps = {
    className: undefined,
    style: undefined,
    title: '',
    isOpen: false,
    onRequestClose: () => {},
    onSubmit: () => {},
    onOpened: () => {},
    fields: () => null,
    initialValues: {},
    submitButtonLabel: 'Submit',
    cancelButtonLabel: 'Cancel',
    disableSubmit: false,
    id: undefined,
    borderRadius: 'rounded',
    size: 'small',
};

export default UniversalFormModal;
