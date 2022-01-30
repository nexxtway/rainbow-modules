import React, { useContext, useRef } from 'react';
import { Option, ButtonIcon } from 'react-rainbow-components';
import { TrashFilled } from '@rainbow-modules/icons';
import { StyledFilterContainer, StyledLabel, StyledPicklist, StyledInput } from './styled';
import { LabelFilter as LabelFilterType, PicklistValue } from '../types';
import context from '../context';
import getLabelFilters from './helpers/getLabelFilters';

const FilterOptions = ({ labels = [] }: { labels: string[] }) => (
    <>
        {labels.map((label) => (
            <Option name={label} label={label} />
        ))}
    </>
);

const LabelFilter = ({
    name: nameInProps,
    value: valueInProps,
    index,
    label,
}: LabelFilterType & { index: number }) => {
    const { filters, updateFilters, labels } = useContext(context);
    const inputRef = useRef<HTMLInputElement>();

    const handleNameChange = ({ name }: PicklistValue) => {
        if (!name || typeof name !== 'string') return;
        const { labels: filterLabels = {} } = filters;
        const newLabels = { ...filterLabels };
        if (Object.keys(filterLabels).includes(name)) {
            newLabels[name].push(valueInProps);
        } else {
            newLabels[name] = [valueInProps];
        }
        newLabels[nameInProps] = newLabels[nameInProps].filter((val) => val !== valueInProps);
        if (newLabels[nameInProps].length === 0) {
            delete newLabels[nameInProps];
        }
        const newFilters = {
            ...filters,
            labels: newLabels,
        };
        updateFilters(newFilters);
        setTimeout(() => inputRef.current?.focus());
    };

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const newLabels: Record<string, string[]> = { ...filters.labels };
        const newValues = [...newLabels[nameInProps]];
        newValues[index] = newValue;
        newLabels[nameInProps] = newValues;
        updateFilters({
            ...filters,
            labels: newLabels,
        });
    };

    const handleRemove = () => {
        const newLabels = { ...(filters.labels || {}) };
        if (newLabels[nameInProps]) {
            const newValues = [...newLabels[nameInProps]];
            newValues.splice(index, 1);
            if (newValues.length === 0) {
                delete newLabels[nameInProps];
            } else {
                newLabels[nameInProps] = newValues;
            }
        }
        if (Object.keys(newLabels).length === 0) {
            newLabels[''] = [''];
        }
        updateFilters({
            ...filters,
            labels: newLabels,
        });
    };

    const picklistValue = {
        value: nameInProps,
        label: nameInProps,
    };

    return (
        <StyledFilterContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledPicklist
                placeholder="Filter Name"
                value={picklistValue}
                onChange={handleNameChange}
            >
                <FilterOptions labels={labels} />
            </StyledPicklist>
            <StyledInput
                placeholder="Value"
                value={valueInProps}
                onChange={handleValueChange}
                ref={inputRef}
            />
            <ButtonIcon icon={<TrashFilled />} onClick={handleRemove} />
        </StyledFilterContainer>
    );
};

const LabelFilters = (): JSX.Element | null => {
    const { filters } = useContext(context);
    const { labels = {} } = filters || {};

    const labelFilters = getLabelFilters(labels);

    if (!filters || labelFilters.length === 0) {
        return <LabelFilter name="" value="" index={0} label="Where" />;
    }

    return (
        <>
            {labelFilters.map(({ name, value, index }, i) => (
                <LabelFilter
                    key={`${index}-${name}`}
                    name={name}
                    value={value}
                    index={index}
                    label={i === 0 ? 'Where' : 'And'}
                />
            ))}
        </>
    );
};

export default LabelFilters;
