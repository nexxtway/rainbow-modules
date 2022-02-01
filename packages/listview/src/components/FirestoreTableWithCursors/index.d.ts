import { ReactNode, forwardRef } from 'react';
import firebase from 'firebase';
import { TableProps } from 'react-rainbow-components/components/Table';

export interface FirestoreTableWithCursorsProps extends Omit<TableProps, 'keyField'> {
    /** The path of the Firestore collection e.g. `/books` */
    collection: string;
    /** Query function for firestore. */
    query?: (ref: firebase.firestore.Query) => void;
    /** It will fetch the data using a collection group query */
    isCollectionGroup: boolean;
    children?: ReactNode;
}

export interface FirestoreTableWithCursorsRef {
    refresh: () => void;
}

export default forwardRef<FirestoreTableWithCursorsRef, FirestoreTableWithCursorsProps>();
