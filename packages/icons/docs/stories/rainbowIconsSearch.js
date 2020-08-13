import React, { useState } from 'react';
import { Search } from '@rainbow-modules/icons';
import { StyledIconsTotal, StyledWrapperIcons, StyledInputSearch, StyledSpan } from './styled';
import iconsArray from './helpers/iconsArray';
import filterIconsBySearchTerm from './helpers/filterIconsBySearchTerm';
import RainbowIconsGallery from './rainbowIconsGallery';

const RainbowIconsSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const rainbowIcons = iconsArray;
    const filteredIcons = filterIconsBySearchTerm(rainbowIcons, searchTerm);
    return (
        <div>
            <StyledWrapperIcons>
                <StyledIconsTotal>
                    All
                    <StyledSpan>{rainbowIcons.length}</StyledSpan>
                    Raibow Icons
                </StyledIconsTotal>
                <StyledInputSearch
                    label="search icons"
                    type="search"
                    hideLabel
                    value={searchTerm}
                    placeholder="Find Icons"
                    aria-label="Find Icons"
                    onChange={({ target: { value } }) => setSearchTerm(value)}
                    icon={<Search />}
                />
            </StyledWrapperIcons>
            <RainbowIconsGallery icons={filteredIcons} />
        </div>
    );
};

export default RainbowIconsSearch;
