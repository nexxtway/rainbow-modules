import React from 'react';
import { Option } from 'react-rainbow-components';
import { MultiSelectOption } from 'react-rainbow-components/components/MultiSelect';
import { StyledFilterMultiSelect } from './styled';
import { SeveritySelectProps } from './types';

const severityMap = {
    debug: 'Debug',
    info: 'Info',
    warning: 'Warning',
    error: 'Error',
};

const SeveritySelect = ({ severity, handleFilterChange }: SeveritySelectProps): JSX.Element => {
    const value = severity?.map((s) => ({ label: severityMap[s], name: s }));

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
            <Option name="debug" label="Debug" />
            <Option name="info" label="Info" />
            <Option name="warning" label="Warning" />
            <Option name="error" label="Error" />
        </StyledFilterMultiSelect>
    );
};

export default SeveritySelect;
