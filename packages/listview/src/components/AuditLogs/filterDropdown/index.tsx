import React, { useContext, useEffect, useState } from 'react';
import context from '../context';
import Filters from './filters';
import {
    StyledAddButton,
    StyledButton,
    StyledButtonsContainer,
    StyledContainer,
    StyledHeader,
} from './styled';
import { FilterDropdownProps, LabelFilter } from '../types';
import { OnChangeFunction } from './types';

const FilterDropdown = ({ close }: FilterDropdownProps): JSX.Element => {
    const { filters, updateFilters } = useContext(context);
    const [labelFilter, setLabelFilter] = useState<LabelFilter>({ '': '' });

    useEffect(() => {
        setLabelFilter(filters.labels || { '': '' });
    }, [filters]);

    const addNewFilter = () => {
        setLabelFilter({
            ...labelFilter,
            '': '',
        });
    };

    const handleFilterChange: OnChangeFunction = ({ oldName, newName, value }) => {
        const newFilter = { ...labelFilter };

        if (!newName) {
            // remove filter
            delete newFilter[oldName];
            if (Object.keys(newFilter).length === 0) {
                newFilter[''] = '';
            }
        } else if (oldName !== newName) {
            // update label name
            newFilter[newName] = newFilter[oldName];
            delete newFilter[oldName];
        } else {
            // update valuee
            newFilter[oldName] = value;
        }

        setLabelFilter(newFilter);
    };

    const handleSave = () => {
        const newFilters = { ...filters };
        newFilters.labels = labelFilter;
        updateFilters(newFilters);
        close();
    };

    return (
        <StyledContainer>
            <StyledHeader>Filter by Label</StyledHeader>
            <Filters filter={labelFilter} onChange={handleFilterChange} />
            <StyledButtonsContainer>
                <StyledAddButton label="Add new filter" variant="neutral" onClick={addNewFilter} />
                <StyledButton label="Cancel" variant="neutral" onClick={() => close()} />
                <StyledButton label="Save" variant="brand" onClick={handleSave} />
            </StyledButtonsContainer>
        </StyledContainer>
    );
};

export default FilterDropdown;
