interface LoadMoreArgs {
    direction?: 'top' | 'bottom';
}

export type Data = Record<string, unknown>;

interface DataArrayArgs {
    data: Data[];
}

interface DataArgs {
    data: Data;
}

interface IdArgs {
    id: string | number;
}

interface IndexArgs {
    index: number;
}

export interface DataObject {
    initialData: Data[];
    push: (args: DataArrayArgs) => void;
    unshift: (args: DataArrayArgs) => void;
    set: (args: DataArrayArgs) => void;
    updateById: (args: DataArgs & IdArgs) => void;
    updateByIndex: (args: DataArgs & IndexArgs) => void;
    deleteById: (args: IdArgs) => void;
    deleteByIndex: (args: IndexArgs) => void;
    onChange: (callback: CallbackFn) => void;
}

export interface CallbackFnArgs {
    event: string;
    data?: Data | Data[];
    id?: string | number;
    index?: number;
}

export type CallbackFn = (args: CallbackFnArgs) => void;

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
