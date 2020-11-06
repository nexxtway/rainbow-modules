/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import { StyledHeader } from './styled';

const Header = (props) => {
    const { inputRef, handleKeyDown } = props;
    return (
        <StyledHeader>
            <Input
                type="search"
                ref={inputRef}
                onKeyDown={handleKeyDown}
                isBare
                icon={<Search />}
                autoComplete="off"
            />
        </StyledHeader>
    );
};

export default Header;
