import React, { useRef } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Input, ButtonIcon, RenderIf } from 'react-rainbow-components';
import { MagnifyingGlass, Close } from '@rainbow-modules/icons';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';
import { StyledContainer, ButtonsContainer, StyledDivider, StyledClearButton } from './styled';
import clearMessages from './clearMessages';

const FloatingSearch = (props) => {
    const { isOpen, triggerRef, onChange, placeholder, style, value, closeSearch } = props;
    const inputRef = useRef(null);
    const intl = useIntl();
    const isValue = value.length > 0;
    const clearButton = intl.formatMessage(clearMessages.clearButton);

    const handleOnChange = (event) => {
        onChange(event.target.value);
    };

    const handleOnMouseDown = (event) => {
        event.preventDefault();
        onChange('');
    };

    return (
        <InternalOverlay
            isVisible={isOpen}
            triggerElementRef={triggerRef}
            onOpened={() => inputRef.current.focus()}
        >
            <StyledContainer>
                <Input
                    placeholder={placeholder}
                    icon={<MagnifyingGlass />}
                    onChange={handleOnChange}
                    style={style}
                    value={value}
                    ref={inputRef}
                />
                <ButtonsContainer>
                    <RenderIf isTrue={isValue}>
                        <StyledClearButton onMouseDown={handleOnMouseDown}>
                            {clearButton}
                        </StyledClearButton>
                        <StyledDivider />
                    </RenderIf>
                    <ButtonIcon size="small" icon={<Close />} onClick={closeSearch} />
                </ButtonsContainer>
            </StyledContainer>
        </InternalOverlay>
    );
};

FloatingSearch.propTypes = {
    /** Specifies the value of an FloatingSearch element. */
    value: PropTypes.string,
    /** Controls whether the FloatingSearch is open or not. */
    isOpen: PropTypes.bool,
    /** Ref or function that returns a ref to a DOM element, the DOM element resolved by this ref will be used to positioning the component passed when visible. */
    triggerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The action triggered to close the FloatingSearch. */
    closeSearch: PropTypes.func,
};

FloatingSearch.defaultProps = {
    value: undefined,
    placeholder: null,
    isOpen: false,
    onChange: () => {},
    closeSearch: () => {},
    style: undefined,
};

export default FloatingSearch;
