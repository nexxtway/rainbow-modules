/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState } from 'react';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import { AuditLogsProps, ContextType, Filters } from './types';
import { StyledContainer } from './styled';
import AuditLogsHeader from './header';
import { Provider } from './context';
import getDatesFromFilter from './helpers/getDatesFromFilter';
import FirestoreFilterTable from './firestoreFilterTable';
import { FirestoreTableWithCursorsRef } from '../FirestoreTableWithCursors';
import { prepareForDownload } from './helpers';

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
    const app = useFirebaseApp();

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

    const getDownloadData = async ({ max, format }: any) => {
        const ref = app.firestore().collection(collectionPath);
        const finalQuery = max ? query(ref).limit(max) : query(ref);
        try {
            const querySnapshot = await finalQuery.get();
            const data = querySnapshot.docs.map((doc: any) => ({
                ...prepareForDownload({ data: doc.data(), format }),
            }));
            return data;
        } catch {
            return {};
        }
    };

    const contextValue: ContextType = {
        filters,
        labels,
        updateFilters,
        getDownloadData,
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
