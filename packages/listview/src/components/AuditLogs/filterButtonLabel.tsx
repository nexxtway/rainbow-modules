import React from 'react';
import { Filter } from '@rainbow-modules/icons';
import { StyledFilterIcon } from './styled';

const FilterButtonLabel = ({ isHidden }: { isHidden?: boolean }): JSX.Element => (
    <>
        <StyledFilterIcon isHidden={isHidden}>
            <Filter />
        </StyledFilterIcon>
        Filter By Label
    </>
);

FilterButtonLabel.defaultProps = {
    isHidden: true,
};

export default FilterButtonLabel;
