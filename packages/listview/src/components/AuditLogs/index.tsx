/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState } from 'react';
import {
    query,
    where,
    orderBy,
    collection,
    limit,
    getDocs,
    DocumentData,
    Query,
} from 'firebase/firestore';
import { useFirestore } from '@rainbow-modules/firebase-hooks';
import { AuditLogsProps, ContextType, Filters } from './types';
import AuditLogsHeader from './header';
import { Provider } from './context';
import getDatesFromFilter from './helpers/getDatesFromFilter';
import FirestoreFilterTable from './firestoreFilterTable';
import { prepareForDownload } from './helpers';
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

const AuditLogs = ({
    collectionPath,
    defaultFilter,
    labels = [],
    title,
}: AuditLogsProps): JSX.Element => {
    const firestore = useFirestore();

    const [filters, setFilters] = useState<Filters>(defaultFilter || defaultFilters);
    const firestoreTableRef = useRef<FirestoreTableWithCursorsRef>(null);

    const handleQuery = (ref: Query<DocumentData>) => {
        const { severity, dateRange } = filters;
        let q = ref;
        if (Array.isArray(severity) && severity.length > 0) {
            q = query(q, where('severity', 'in', severity));
        }
        if (dateRange) {
            const dates = getDatesFromFilter(dateRange);
            if (dates) {
                q = query(q, where('createdAt', '>=', dates[0]));
                q = query(q, where('createdAt', '<=', dates[1]));
            }
        }
        const { labels: filterLabels = {} } = filters;
        Object.keys(filterLabels).forEach((key) => {
            if (!key) return;
            q = query(q, where(`labels.${key}`, '==', filterLabels[key]));
        });
        return query(q, orderBy('createdAt', 'desc'));
    };

    const updateFilters = useCallback((newFilters: Filters) => {
        setFilters(newFilters);
        setTimeout(() => {
            if (firestoreTableRef.current) firestoreTableRef.current.refresh();
        });
    }, []);

    const getDownloadData = async ({ max, format }: any) => {
        const ref = collection(firestore, collectionPath);
        const finalQuery = max ? handleQuery(query(ref, limit(max))) : handleQuery(ref);
        try {
            const querySnapshot = await getDocs(finalQuery);
            const data = querySnapshot.docs.map((doc: any) => ({
                ...doc.data(),
            }));
            return prepareForDownload({ data, format });
        } catch {
            return [{}];
        }
    };

    const contextValue: ContextType = {
        filters,
        labels,
        updateFilters,
        getDownloadData,
    };

    return (
        <div>
            <Provider value={contextValue}>
                <AuditLogsHeader title={title} />
            </Provider>
            <FirestoreFilterTable
                collection={collectionPath}
                query={handleQuery}
                ref={firestoreTableRef}
            />
        </div>
    );
};

export default AuditLogs;
