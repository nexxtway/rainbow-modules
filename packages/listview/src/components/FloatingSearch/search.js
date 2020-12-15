import React from 'react';
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

const Search = (props) => {
    const { onChange, placeholder, style, className, value, onRequestClose, inputRef } = props;
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
        <StyledContainer style={style} className={className}>
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
                    <StyledClearButton onMouseDown={handleOnMouseDown}>
                        {clearButton}
                    </StyledClearButton>
                    <StyledDivider />
                </RenderIf>
                <ButtonIcon size="small" icon={<Close />} onClick={onRequestClose} />
            </ButtonsContainer>
        </StyledContainer>
    );
};

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
