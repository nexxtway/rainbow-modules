import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon, RenderIf } from 'react-rainbow-components';
import { Close, Search } from '@rainbow-modules/icons';
import {
    StyledContainer,
    ButtonsContainer,
    StyledDivider,
    StyledClearButton,
    StyledInput,
} from './styled/search';

const SearchInput = (props) => {
    const { onChange, value, onRequestClose } = props;
    const inputRef = useRef();
    const hasValue = value && value.length > 0;

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleOnMouseDown = (event) => {
        event.preventDefault();
        onChange('');
    };

    return (
        <StyledContainer>
            <StyledInput
                type="search"
                ref={inputRef}
                value={value}
                isBare
                icon={<Search />}
                autoComplete="off"
                onChange={(event) => onChange(event.target.value)}
            />
            <ButtonsContainer>
                <RenderIf isTrue={hasValue}>
                    <StyledClearButton onMouseDown={handleOnMouseDown}>Clear</StyledClearButton>
                    <StyledDivider />
                </RenderIf>
                <ButtonIcon size="small" icon={<Close />} onClick={onRequestClose} />
            </ButtonsContainer>
        </StyledContainer>
    );
};

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onRequestClose: PropTypes.func,
};

SearchInput.defaultProps = {
    value: undefined,
    onChange: () => {},
    onRequestClose: () => {},
};

export default SearchInput;
