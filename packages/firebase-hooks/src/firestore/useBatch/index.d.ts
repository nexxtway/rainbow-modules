type Doc = {
    id?: number;
    data?: Record<string, unknown>;
};

export interface BatchBaseProps {
    db?: Record<string, unknown>;
    collection?: unknown;
    data?: Array<Doc>;
}

export interface BatchSetProps extends BatchBaseProps {
    options?: Record<string, unknown>;
}

type ActionParams = {
    db?: Record<string, unknown>;
    collection?: unknown;
    data?: Array<Doc>;
    options?: Record<string, unknown>;
};

export interface BatchSplitProps extends BatchSetProps {
    action?: (params: ActionParams) => unknown;
}

export interface UseBatchProps {
    collection?: string;
}

export interface UseBatchResult {
    batchUpdate: (data: Array<Doc>) => unknown;
    batchSet: (data: Array<Doc>, options?: Record<string, unknown>) => unknown;
    batchAdd: (data: Array<Doc>) => unknown;
    batchDelete: (data: Array<Doc>) => unknown;
}

export declare function batchAdd(props: BatchBaseProps): unknown;
export declare function batchDelete(props: BatchBaseProps): unknown;
export declare function batchSet(props: BatchSetProps): unknown;
export declare function batchSplit(props: BatchSplitProps): unknown;
export declare function batchUpdate(props: BatchBaseProps): unknown;
export default function (props: UseBatchProps): UseBatchResult;
