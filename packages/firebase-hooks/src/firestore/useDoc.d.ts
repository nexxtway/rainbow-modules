import { UseDocFn } from './types';

export interface UseDocProps {
    /** The firestore document path to fetch. */
    path: string;
    /** When set to true the document id will be merged with each document data as `id`. Otherwise each item in the array returned will be an object with id and data properties.  */
    flat?: true | false;
    /** When set to true it will not make the request. It is used for make conditional fetch. */
    disabled?: boolean;
}

declare const useDoc: UseDocFn<UseDocProps>;
export default useDoc;
