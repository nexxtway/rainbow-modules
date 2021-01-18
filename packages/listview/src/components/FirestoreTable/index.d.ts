export interface FirestoreTableProps {
    /** The path of the Firestore collection e.g. `/books` */
    collection: string;
    /** Query function for firestore. */
    query?: () => void;
    /** It fetch the collection data once. */
    fetchOnce?: boolean;
    /** Specifies the default sorting direction on an unsorted column. Valid options include 'asc' and 'desc'.
     * The default is 'asc' for sorting in ascending order. */
    defaultSortDirection?: 'asc' | 'desc';
    /** The column fieldName that controls the sorting order. */
    sortedBy?: string;
}

export default function (props: FirestoreTableProps): JSX.Element | null;
