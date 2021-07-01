import React, { useRef, useState } from 'react';
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
    value: valueInProps,
    variant,
    onChange,
    onSearch,
    placeholder,
    autoComplete,
}: InputSearchProps) => {
    const [value, setValue] = useState(valueInProps);
    const trailingRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<InputComponent>(null);

    const clear = () => {
        setValue('');
        if (onChange) onChange('');
        if (inputRef.current) inputRef.current.focus();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
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
                autoComplete={autoComplete}
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
    value: '',
    name: undefined,
    variant: 'default',
    placeholder: undefined,
    autoComplete: 'off',
};

export default InputSearch;
