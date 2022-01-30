import React, { useContext } from 'react';
import { Button } from 'react-rainbow-components';
import context from '../context';
import Filters from './filters';
import { StyledContainer, StyledHeader } from './styled';

const FilterDropdown = React.forwardRef<HTMLDivElement>((props, ref) => {
    const { filters, updateFilters } = useContext(context);
    const addNewFilter = () => {
        const { labels } = filters;
        updateFilters({
            ...filters,
            labels: {
                ...labels,
                '': [''],
            },
        });
    };

    return (
        <StyledContainer ref={ref}>
            <StyledHeader>Filter by Label</StyledHeader>
            <Filters />
            <Button label="Add new fitler" variant="neutral" onClick={addNewFilter} />
        </StyledContainer>
    );
});

export default FilterDropdown;
