/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Option } from 'react-rainbow-components';
import { MultiSelectOption } from 'react-rainbow-components/components/MultiSelect';
import { Debug, Error, Info, Warning } from './icons';
import { StyledFilterMultiSelect, StyledSeverityLabel } from './styled';
import { SeveritySelectProps } from './types';

const severityMap = {
    debug: {
        icon: <Debug />,
        label: 'Debug',
    },
    info: {
        icon: <Info />,
        label: 'Info',
    },
    warning: {
        icon: <Warning />,
        label: 'Warning',
    },
    error: {
        icon: <Error />,
        label: 'Error',
    },
};

const SeverityLabel = ({ name }: { name: 'debug' | 'info' | 'warning' | 'error' }) => (
    <StyledSeverityLabel>
        {severityMap[name].icon} {severityMap[name].label}
    </StyledSeverityLabel>
);

const SeveritySelect = ({ severity, handleFilterChange }: SeveritySelectProps): JSX.Element => {
    const value = severity?.map((s) => ({ label: severityMap[s].label, name: s }));

    const handleSeverityChange = (newValue: MultiSelectOption[]) => {
        if (handleFilterChange)
            handleFilterChange(
                'severity',
                newValue.map((val) => val.name),
            );
    };

    return (
        <StyledFilterMultiSelect
            placeholder="All Severities"
            value={value}
            onChange={handleSeverityChange}
            showCheckbox
        >
            <Option name="debug" label={<SeverityLabel name="debug" />} />
            <Option name="info" label={<SeverityLabel name="info" />} />
            <Option name="warning" label={<SeverityLabel name="warning" />} />
            <Option name="error" label={<SeverityLabel name="error" />} />
        </StyledFilterMultiSelect>
    );
};

export default SeveritySelect;
