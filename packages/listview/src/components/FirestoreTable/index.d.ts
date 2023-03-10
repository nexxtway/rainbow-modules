import { ReactNode } from 'react';
import { Query, DocumentData } from 'firebase/firestore';

export interface FirestoreTableProps {
    /** The path of the Firestore collection e.g. `/books` */
    collection: string;
    /** It is a function that receive a collection reference where you can do queries. e.g (ref) => query(ref, where('name', '==', 'John Doe')) */
    query?: (ref: Query<DocumentData>) => Query<DocumentData>;
    /** It fetch the collection data once. */
    fetchOnce?: boolean;
    /** Specifies the default sorting direction on an unsorted column. Valid options include 'asc' and 'desc'.
     * The default is 'asc' for sorting in ascending order. */
    defaultSortDirection?: 'asc' | 'desc';
    /** The column fieldName that controls the sorting order. */
    sortedBy?: string;
    children?: ReactNode;
    variant?: 'default' | 'listview';
}

export default function (props: FirestoreTableProps): JSX.Element | null;
