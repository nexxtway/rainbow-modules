import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-rainbow-components';
import context from '../context';
import Filters from './filters';
import {
    StyledAddButton,
    StyledButton,
    StyledButtonsContainer,
    StyledContainer,
    StyledHeader,
    StyledHeaderContainer,
} from './styled';
import { FilterDropdownProps, LabelFilter } from '../types';
import { OnChangeFunction } from './types';

const FilterDropdown = ({ close }: FilterDropdownProps): JSX.Element => {
    const { filters, labels, updateFilters } = useContext(context);
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

            // Ensure that the empty filter remains in last position if it existed
            // to prevent the changed filter from swaping position
            const index = Object.keys(newFilter).indexOf('');
            if (index !== -1 && index !== Object.keys(newFilter).length - 1) {
                delete newFilter[''];
                newFilter[''] = '';
            }
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

    const clearAll = () => setLabelFilter({ '': '' });

    const isAddDisabled = labels.length === Object.keys(labelFilter).length;
    const isReadOnly = Object.keys(labelFilter).every((key) => !!key) && isAddDisabled;

    return (
        <StyledContainer>
            <StyledHeaderContainer>
                <StyledHeader>Filter by Label</StyledHeader>
                <Button label="Clear all" size="small" variant="base" onClick={clearAll} />
            </StyledHeaderContainer>
            <Filters filter={labelFilter} onChange={handleFilterChange} readOnly={isReadOnly} />
            <StyledButtonsContainer>
                <StyledAddButton
                    label="Add new filter"
                    variant="neutral"
                    onClick={addNewFilter}
                    disabled={isAddDisabled}
                />
                <StyledButton label="Cancel" variant="neutral" onClick={() => close()} />
                <StyledButton label="Save" variant="brand" onClick={handleSave} />
            </StyledButtonsContainer>
        </StyledContainer>
    );
};

export default FilterDropdown;
