import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ButtonIcon, RenderIf } from 'react-rainbow-components';
import { MagnifyingGlass, Close } from '@rainbow-modules/icons';
import {
    StyledContainer,
    ButtonsContainer,
    StyledDivider,
    StyledClearButton,
    StyledInput,
} from './styled';
import messages from './messages';
import useKeyHandler from './useKeyHandler';

const Search = forwardRef((props, ref) => {
    const { onChange, placeholder, style, className, value, onRequestClose, inputRef } = props;
    const { keyDownHandler } = useKeyHandler({ value, onChange, onRequestClose });
    const intl = useIntl();
    const hasValue = value && value.length > 0;
    const clearButton = intl.formatMessage(messages.clearButton);

    const handleOnChange = (event) => {
        onChange(event.target.value);
    };

    const handleOnMouseDown = (event) => {
        event.preventDefault();
        onChange('');
    };

    return (
        <StyledContainer ref={ref} style={style} className={className} onKeyDown={keyDownHandler}>
            <StyledInput
                placeholder={placeholder}
                icon={<MagnifyingGlass />}
                onChange={handleOnChange}
                value={value}
                ref={inputRef}
                type="search"
            />
            <ButtonsContainer>
                <RenderIf isTrue={hasValue}>
                    <StyledClearButton
                        data-id="clear-search-value-button"
                        onMouseDown={handleOnMouseDown}
                    >
                        {clearButton}
                    </StyledClearButton>
                    <StyledDivider />
                </RenderIf>
                <ButtonIcon size="small" icon={<Close />} onClick={onRequestClose} />
            </ButtonsContainer>
        </StyledContainer>
    );
});

export default Search;

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    onRequestClose: PropTypes.func,
    className: PropTypes.string,
    inputRef: PropTypes.shape({ current: PropTypes.object }),
};

Search.defaultProps = {
    value: undefined,
    className: undefined,
    placeholder: null,
    onChange: () => {},
    onRequestClose: () => {},
    style: undefined,
    inputRef: undefined,
};
