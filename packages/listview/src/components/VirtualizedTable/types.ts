interface LoadMoreArgs {
    direction?: 'top' | 'bottom';
}

export type Data = Array<Record<string, unknown>>;

export type CallbackFnArgs = {
    event: string;
    data: Array<Record<string, unknown>>;
    index?: number;
    deleteCount?: number;
};

export type CallbackFn = (args: CallbackFnArgs) => void;

export interface DataObject {
    initialData: Data;
    push: (data: Data) => void;
    unshift: (data: Data) => void;
    update: (data: Data) => void;
    insert: (data: Data, index: number) => void;
    delete: (index: number, deleteCount: number) => void;
    onChange: (callback: CallbackFn) => void;
}

export interface OperationResult {
    data: Data;
    position?: number;
}

export interface ColumnsProps {
    columns: string[];
}

export interface VirtualizedTableProps {
    /** The keys that will be shown as columns. */
    dataKeys?: string[];
    /**
     * Object that implements `DataObject` interface, containing the initial data and the methods
     * to mutate it.
     */
    data?: DataObject;
    /**
     * Callback invoked when it is necesary to load more data.
     */
    onLoadMore?: (args: LoadMoreArgs) => void;
    /** When true, enable infinite loading on the top of the table. */
    enableInfinityScrollTop?: boolean;
    /** When true, enable infinite loading on the bottom of the table. */
    enableInfinityScrollBottom?: boolean;
    /** Specifies that a loading indicator should be shown. */
    isLoading?: boolean;
    /** Specifies that a loading indicator should be shown on the top row. */
    isLoadingTop?: boolean;
    /** Specifies that a loading indicator should be shown on the bottom row. */
    isLoadingBottom?: boolean;
}
