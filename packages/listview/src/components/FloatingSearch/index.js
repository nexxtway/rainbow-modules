import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { InternalOverlay } from 'react-rainbow-components';
import { useOutsideClick } from '@rainbow-modules/hooks';
import Search from './search';

const FloatingSearch = (props) => {
    const { isVisible, triggerElementRef, onRequestClose, ...rest } = props;
    const inputRef = useRef();
    const searchBoxRef = useRef();

    useOutsideClick(
        searchBoxRef,
        (event) => {
            const triggerHtmlElement = triggerElementRef().current;
            if (
                !triggerHtmlElement.contains(event.target) &&
                event.target.dataset.id !== 'clear-search-value-button'
            ) {
                onRequestClose(false);
            }
        },
        isVisible,
    );

    return (
        <InternalOverlay
            isVisible={isVisible}
            triggerElementRef={triggerElementRef}
            onOpened={() => inputRef.current.focus()}
            keepScrollEnabled
        >
            <Search
                {...rest}
                ref={searchBoxRef}
                inputRef={inputRef}
                onRequestClose={onRequestClose}
            />
        </InternalOverlay>
    );
};

FloatingSearch.propTypes = {
    /** Specifies the value of an FloatingSearch element. */
    value: PropTypes.string,
    /** Controls whether the FloatingSearch is open or not. */
    isVisible: PropTypes.bool,
    /** Ref or function that returns a ref to a DOM element, the DOM element resolved by this ref will be used to positioning the component passed when visible. */
    triggerElementRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The action triggered to close the FloatingSearch. */
    onRequestClose: PropTypes.func,
    /** A CSS class for the FloatingSearch in addition to the component's base classes. */
    className: PropTypes.string,
    /** The id of the outer element. */
    id: PropTypes.string,
};

FloatingSearch.defaultProps = {
    value: undefined,
    className: undefined,
    placeholder: null,
    isVisible: false,
    onChange: () => {},
    onRequestClose: () => {},
    style: undefined,
    id: undefined,
};

export default FloatingSearch;
