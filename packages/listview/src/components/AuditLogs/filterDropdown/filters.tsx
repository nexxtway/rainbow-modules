/* eslint-disable react/require-default-props */
import React, { useContext, useRef } from 'react';
import { Option, ButtonIcon } from 'react-rainbow-components';
import { TrashFilled } from '@rainbow-modules/icons';
import { StyledFilterContainer, StyledLabel, StyledPicklist, StyledInput } from './styled';
import { LabelFilter as LabelFilterType, PicklistValue } from '../types';
import context from '../context';
import { OnChangeFunction } from './types';

const FilterOptions = ({ labels: activeLabels = [] }: { labels: string[] }) => {
    const { labels } = useContext(context);
    return (
        <>
            {labels
                .filter((label) => !activeLabels.includes(label))
                .map((label) => (
                    <Option name={label} label={label} />
                ))}
        </>
    );
};

const LabelFilter = ({
    index,
    name: nameInProps,
    value: valueInProps,
    label,
    filteredLabels,
    readOnly,
    onChange,
}: {
    name: string;
    value?: string;
    index: number;
    label: string;
    filteredLabels: string[];
    readOnly?: boolean;
    onChange: OnChangeFunction;
}) => {
    const inputRef = useRef<HTMLInputElement>();

    const handleNameChange = ({ name }: PicklistValue) =>
        onChange({
            oldName: nameInProps,
            newName: name as string,
            value: valueInProps,
        });

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange({
            oldName: nameInProps,
            newName: nameInProps,
            value: newValue,
        });
    };

    const handleRemove = () =>
        onChange({ oldName: nameInProps, newName: undefined, value: undefined });

    const picklistValue = {
        name: nameInProps,
        label: nameInProps,
    };

    return (
        <StyledFilterContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledPicklist
                name={`name[${index}]`}
                placeholder="Filter Name"
                value={picklistValue}
                onChange={handleNameChange}
                readOnly={readOnly}
            >
                <FilterOptions labels={filteredLabels} />
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

const LabelFilters = ({
    filter,
    readOnly,
    onChange,
}: {
    filter: LabelFilterType;
    readOnly?: boolean;
    onChange: OnChangeFunction;
}): JSX.Element | null => {
    const filteredLabels = Object.keys(filter);
    return (
        <>
            {filteredLabels.map((name, i) => (
                <LabelFilter
                    key={name}
                    index={i}
                    label={i === 0 ? 'Where' : 'And'}
                    name={name}
                    value={filter[name]}
                    filteredLabels={filteredLabels}
                    onChange={onChange}
                    readOnly={readOnly}
                />
            ))}
        </>
    );
};

export default LabelFilters;
