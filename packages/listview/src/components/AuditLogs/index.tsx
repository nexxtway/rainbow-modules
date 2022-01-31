/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react';
import { Column } from 'react-rainbow-components';
import { useCollection } from '@rainbow-modules/firebase-hooks';
import { AuditLogsProps, ContextType, Filters } from './types';
import { StyledContainer, StyledTable } from './styled';
import AuditLogsHeader from './header';
import Severity from './severity';
import { Provider } from './context';
import getDatesFromFilter from './helpers/getDatesFromFilter';
import FirestoreDate from './firestoreDate';
import Summary from './summary';

const defaultFilters: Filters = {
    severity: [],
    dateRange: {
        name: 'all',
        label: 'All Dates',
    },
    labels: {
        '': [''],
    },
};

const AuditLogs = ({ collectionPath, defaultFilter, labels = [] }: AuditLogsProps): JSX.Element => {
    const [filters, setFilters] = useState<Filters>(defaultFilter || defaultFilters);

    const query = (ref: any) => {
        const { severity, dateRange } = filters;
        let q = ref;
        if (Array.isArray(severity) && severity.length > 0) {
            q = q.where('severity', 'in', severity);
        }
        if (dateRange) {
            const dates = getDatesFromFilter(dateRange);
            if (dates) {
                // TODO: find out date field name
                q = q.where('date', '>=', dates[0]).where('date', '<=', dates[1]);
            }
        }
        return q.orderBy('date', 'desc');
    };

    const [data, isLoading] = useCollection({
        path: collectionPath,
        query,
        track: [filters],
    });

    const updateFilters = useCallback((newFilters: Filters) => {
        setFilters(newFilters);
    }, []);

    const contextValue: ContextType = {
        filters,
        labels,
        updateFilters,
    };

    const tableData = isLoading
        ? []
        : (data as Array<any>)
              .filter(({ data: item }) => {
                  const { labels: itemLabels } = item;
                  const itemLabelKeys = Object.keys(itemLabels);
                  const { labels: filterLabels = {} } = filters;
                  return Object.keys(filterLabels).every((key) => {
                      if (!key) return true;
                      if (!itemLabelKeys.includes(key)) return false;
                      return filterLabels[key].includes(itemLabels[key]);
                  });
              })
              .map((item) => item.data);

    return (
        <StyledContainer>
            <Provider value={contextValue}>
                <AuditLogsHeader />
            </Provider>
            <StyledTable keyField="id" data={tableData} isLoading={!!isLoading} variant="listview">
                <Column
                    header="Severity"
                    field="severity"
                    headerAlignment="center"
                    cellAlignment="center"
                    width={80}
                    component={Severity}
                />
                <Column
                    header="Date"
                    field="date"
                    headerAlignment="left"
                    cellAlignment="left"
                    defaultWidth={250}
                    component={FirestoreDate}
                />
                <Column
                    header="Summary"
                    field="textPayload"
                    headerAlignment="left"
                    cellAlignment="left"
                    component={Summary}
                />
            </StyledTable>
        </StyledContainer>
    );
};

export default AuditLogs;
