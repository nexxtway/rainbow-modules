import { ReactNode } from 'react';

export interface FirestoreTableWithCursorsProps {
    /** The path of the Firestore collection e.g. `/books` */
    collection: string;
    /** Query function for firestore. */
    query?: () => void;
    children?: ReactNode;
}

export default function (props: FirestoreTableWithCursorsProps): JSX.Element | null;
