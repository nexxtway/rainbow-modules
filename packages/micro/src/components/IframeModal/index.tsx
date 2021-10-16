import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-rainbow-components';
import { StyledIframe } from './styled';
import { IframeModalProps } from './types';

const IframeModal: React.FC<IframeModalProps> = ({
    id,
    className,
    style,
    src,
    isOpen,
    title,
    onRequestClose,
}: IframeModalProps) => {
    return (
        <Modal id={id} isOpen={isOpen} size="large" onRequestClose={onRequestClose}>
            <StyledIframe className={className} style={style} src={src} title={title} />
        </Modal>
    );
};

IframeModal.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the iframe element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the iframe element. */
    style: PropTypes.object,
    /** The URL of the page to embed. */
    src: PropTypes.string,
    /** The title of the iframe, for accessibility. */
    title: PropTypes.string,
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen: PropTypes.bool,
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside the modal). */
    onRequestClose: PropTypes.func,
};

IframeModal.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    src: undefined,
    title: undefined,
    isOpen: false,
    onRequestClose: undefined,
};

export default IframeModal;
