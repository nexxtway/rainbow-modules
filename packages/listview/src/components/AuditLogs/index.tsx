/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState } from 'react';
import { AuditLogsProps, ContextType, Filters } from './types';
import { StyledContainer } from './styled';
import AuditLogsHeader from './header';
import { Provider } from './context';
import getDatesFromFilter from './helpers/getDatesFromFilter';
import FirestoreFilterTable from './firestoreFilterTable';
import { FirestoreTableWithCursorsRef } from '../FirestoreTableWithCursors';

const defaultFilters: Filters = {
    severity: [],
    dateRange: {
        name: 'all',
        label: 'All Dates',
    },
    labels: {
        '': '',
    },
};

const AuditLogs = ({ collectionPath, defaultFilter, labels = [] }: AuditLogsProps): JSX.Element => {
    const [filters, setFilters] = useState<Filters>(defaultFilter || defaultFilters);
    const firestoreTableRef = useRef<FirestoreTableWithCursorsRef>(null);

    const query = (ref: any) => {
        const { severity, dateRange } = filters;
        let q = ref;
        if (Array.isArray(severity) && severity.length > 0) {
            q = q.where('severity', 'in', severity);
        }
        if (dateRange) {
            const dates = getDatesFromFilter(dateRange);
            if (dates) {
                q = q.where('createdAt', '>=', dates[0]).where('createdAt', '<=', dates[1]);
            }
        }
        const { labels: filterLabels = {} } = filters;
        Object.keys(filterLabels).forEach((key) => {
            if (!key) return;
            q = q.where(`labels.${key}`, '==', filterLabels[key]);
        });
        return q.orderBy('createdAt', 'desc');
    };

    const updateFilters = useCallback((newFilters: Filters) => {
        setFilters(newFilters);
        setTimeout(() => {
            if (firestoreTableRef.current) firestoreTableRef.current.refresh();
        });
    }, []);

    const contextValue: ContextType = {
        filters,
        labels,
        updateFilters,
    };

    return (
        <StyledContainer>
            <Provider value={contextValue}>
                <AuditLogsHeader />
            </Provider>
            <FirestoreFilterTable
                collection={collectionPath}
                query={query}
                ref={firestoreTableRef}
            />
        </StyledContainer>
    );
};

export default AuditLogs;
