/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useRef, useState } from 'react';
import { Download } from '@rainbow-modules/icons';
import { DatePickerModal, Option } from 'react-rainbow-components';
import InternalOverlay from 'react-rainbow-components/components/InternalOverlay';

import {
    StyledFilterButton,
    StyledFilterButtonIcon,
    StyledFilterPicklist,
    StyledHeaderContainer,
    StyledHeaderText,
} from './styled';
import FilterDropdown from './filterDropdown';
import { ButtonHandle } from './types';
import context from './context';
import SeveritySelect from './severitySelect';
import formatDates from './helpers/formatDates';
import FilterButtonLabel from './filterButtonLabel';

const ToolBar = () => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
    // TODO: fix this state types
    const [dateValue, setDateValue] = useState<any>();
    const { filters, updateFilters } = useContext(context);
    const { severity, dateRange } = filters;

    const filterButtonRef = useRef<ButtonHandle>();

    const closeLabelFilters = () => setIsFilterOpen(false);

    const toggleLabelFilters = () => setIsFilterOpen(!isFilterOpen);

    const handleFilterChange = (key: string, value: any) =>
        updateFilters({
            ...filters,
            [key]: value,
        });

    const handleDateChange = ({ name, label }: any) => {
        if (name === 'custom') {
            setIsDatePickerOpen(true);
        } else {
            handleFilterChange('dateRange', { name, label });
        }
    };

    const handleDatePickerChange = (value: Date | Date[]) => {
        const dates = value as Date[];
        setDateValue(dates);
        if (dates.length < 2) return;
        const formatedDate = formatDates(dates);
        handleFilterChange('dateRange', { name: 'custom', label: formatedDate });
        setIsDatePickerOpen(false);
    };

    const shouldHideMark = Object.keys(filters.labels || {}).every((key) => key === '');

    return (
        <>
            <SeveritySelect severity={severity} handleFilterChange={handleFilterChange} />
            <StyledFilterPicklist
                name="dateRange"
                onChange={handleDateChange}
                onClick={closeLabelFilters}
                value={dateRange}
            >
                <Option name="all" label="All Time" />
                <Option name="today" label="Today" />
                <Option name="this-week" label="This Week" />
                <Option name="this-month" label="This Month" />
                <Option name="custom" label="Custom" />
            </StyledFilterPicklist>
            <StyledFilterButton
                label={<FilterButtonLabel isHidden={shouldHideMark} />}
                variant="neutral"
                onClick={toggleLabelFilters}
                ref={filterButtonRef}
            />
            <StyledFilterButtonIcon icon={<Download />} variant="neutral" />
            <InternalOverlay
                isVisible={isFilterOpen}
                triggerElementRef={filterButtonRef.current?.htmlElementRef}
            >
                <FilterDropdown close={closeLabelFilters} />
            </InternalOverlay>
            <DatePickerModal
                isOpen={isDatePickerOpen}
                selectionType="range"
                variant="double"
                value={dateValue}
                onChange={handleDatePickerChange}
                onRequestClose={() => setIsDatePickerOpen(false)}
            />
        </>
    );
};

const AuditLogsHeader = (): JSX.Element => {
    return (
        <>
            <StyledHeaderContainer>
                <StyledHeaderText>Audit Logs</StyledHeaderText>
                <ToolBar />
            </StyledHeaderContainer>
        </>
    );
};

export default AuditLogsHeader;
