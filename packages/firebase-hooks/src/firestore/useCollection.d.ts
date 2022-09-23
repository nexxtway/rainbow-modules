import { UseCollectionFn } from './types';

export interface UseCollectionProps {
    /** The firestore collection path to fetch. */
    path: string;
    /** It is a function that receive a firestore reference where you can do queries. e.g (ref) => ref.where('name', '==', 'John Doe').limit(10);  */
    query?: (ref: Record<string, unknown>) => void;
    /** When set to true the hook will return an array with document ids. */
    onlyIds?: boolean;
    /** When set to true the document id will be merged with each document data as `id`. Otherwise each item in the array returned will be an object with id and data properties.  */
    flat?: boolean;
    /** An array indicating what should cause to refetch when changed. */
    track?: Array<unknown>;
    /** When set to true it will not make the request. It is used for make conditional fetch. */
    disabled?: boolean;
}

declare const useCollection: UseCollectionFn<UseCollectionProps>;
export default useCollection;
