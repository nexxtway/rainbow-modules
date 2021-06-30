import React, { useRef } from 'react';
import { MagnifyingGlass } from '@rainbow-modules/icons';
import { InputComponent, InputSearchProps } from './types';
import { StyledContainer, StyledInput } from './styled';
import Trailing from './trailing';

const InputSearch: React.FC<InputSearchProps> = ({
    className,
    style,
    disabled,
    readOnly,
    name,
    value,
    variant,
    placeholder,
    onChange,
    onSearch,
}: InputSearchProps) => {
    const trailingRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<InputComponent>(null);

    const clear = () => {
        if (onChange) onChange('');
        if (inputRef.current) inputRef.current.focus();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (onSearch && event.key === 'Enter') onSearch(value);
        if (event.key === 'Escape') clear();
    };

    const paddingRight = variant === 'default' ? '8rem' : '2.5rem';

    return (
        <StyledContainer className={className} style={style}>
            <StyledInput
                type="search"
                name={name}
                icon={<MagnifyingGlass />}
                paddingRight={paddingRight}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                placeholder={placeholder}
            />
            <Trailing value={value} variant={variant} onClear={clear} ref={trailingRef} />
        </StyledContainer>
    );
};

InputSearch.defaultProps = {
    className: undefined,
    style: undefined,
    disabled: false,
    readOnly: false,
    value: undefined,
    name: undefined,
    placeholder: undefined,
    variant: 'default',
};

export default InputSearch;
