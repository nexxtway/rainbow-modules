export type Doc<DocType> = {
    [key in keyof DocType]: DocType[key];
} & {
    id: number;
};

export interface UseDocFn<TProps> {
    <TDoc = unknown>(props: TProps): [Doc<TDoc> | undefined, boolean];
}

export interface UseCollectionFn<TProps> {
    <TDoc = unknown>(props: TProps): [Doc<TDoc>[], boolean];
}
