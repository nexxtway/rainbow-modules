import { ReactNode, forwardRef } from 'react';
import { Query, DocumentData } from 'firebase/firestore';
import { TableProps } from 'react-rainbow-components/components/Table';

export interface FirestoreTableWithCursorsProps extends Omit<TableProps, 'keyField'> {
    /** The path of the Firestore collection e.g. `/books` */
    collection: string;
    /** Query function for firestore. */
    query?: (ref: Query<DocumentData>) => Query<DocumentData>;
    /** It will fetch the data using a collection group query */
    isCollectionGroup: boolean;
    children?: ReactNode;
}

export interface FirestoreTableWithCursorsRef {
    refresh: () => void;
}

export default forwardRef<FirestoreTableWithCursorsRef, FirestoreTableWithCursorsProps>();
