import { ReactNode, MouseEvent } from 'react';

export interface FilterMultiSelectOption {
    name?: string | number;
    label?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
    icon?: ReactNode;
}

export interface ColumnHeaderFilterTextProps {
    /**
     * The options to choose in the multiselect
     */
    options?: FilterMultiSelectOption[];
    /**
     * A filter to initialize the component
     */
    defaultFilters?: FilterMultiSelectOption[];
    /**
     * Action triggered when a column is filtered. Receive a string array with the words to filter.
     */
    onFilter?: (filters: string[]) => void;
    /**
     * Action triggered when a column is sorted. Receives the event object and sortDirection.
     */
    onSort?: (event: MouseEvent<HTMLElement>, field: string, nextSortDirection: string) => void;
    /**
     * Specifies the sorting direction.
     */
    sortDirection?: 'asc' | 'desc';
    /**
     * Specifies whether it can be sorted.
     */
    sortable?: boolean;
    /**
     * The header of the column. It could be just a `String` with text or a component with a desired content.
     */
    header?: ReactNode;
    /**
     * The alignment of the text of the column header
     */
    headerAlignment?: 'left' | 'center' | 'right';
}

export default function (props: ColumnHeaderFilterTextProps): JSX.Element | null;
