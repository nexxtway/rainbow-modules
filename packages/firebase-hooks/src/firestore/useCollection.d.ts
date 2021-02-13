export interface UseCollectionProps {
    path: string;
    query: Record<string, unknown>;
    onlyIds?: boolean;
    flat?: boolean;
    track?: Array<unknown>;
}

export default function useCollection(props: UseCollectionProps): [Array<unknown>, boolean];
