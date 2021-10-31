import React from 'react';
import PropTypes from 'prop-types';
import { IframeProps, Variant } from './types';
import FullPageIframe from './fullPage';
import PopupIframe from './popup';

const componentMap: Record<Variant, any> = {
    fullPage: FullPageIframe,
    popup: PopupIframe,
};

const Iframe: React.FC<IframeProps> = ({ variant, ...rest }: IframeProps) => {
    const Component = componentMap[variant ?? 'fullPage'];
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...rest} />;
};

Iframe.propTypes = {
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
    /** The variant of the iframe to show */
    variant: PropTypes.oneOf(['fullPage', 'popup']),
    /** The action triggered when the component request to close
     *  (e.g click close button). */
    onRequestClose: PropTypes.func,
};

Iframe.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    src: undefined,
    title: undefined,
    isOpen: false,
    variant: 'fullPage',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onRequestClose: () => {},
};

export default Iframe;
