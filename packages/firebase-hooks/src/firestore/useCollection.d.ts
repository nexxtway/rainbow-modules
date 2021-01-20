export interface UseCollectionProps {
    path: string;
    query: Record<string, unknown>;
    onlyIds?: boolean;
    flat?: boolean;
    track?: Array<any>;
}

export default function useCollection(props: UseCollectionProps): [Array<any>, boolean];
