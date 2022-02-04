/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, RefObject, CSSProperties } from 'react';

export type Severity = 'debug' | 'info' | 'warning' | 'error';

export type LabelFilter = {
    [name: string]: string | undefined;
};

export interface Filters {
    severity?: Severity[];
    dateRange?: DateRange;
    labels?: LabelFilter;
}

export interface AuditLogsProps {
    collectionPath: string;
    labels?: string[];
    defaultFilter?: Filters;
}

export interface SeverityProps {
    value?: string;
}

export interface ButtonHandle {
    htmlElementRef: RefObject<HTMLButtonElement>;
    focus: () => void;
    blur: () => void;
    click: () => void;
}

export type ContextType = {
    filters: Filters;
    labels: string[];
    updateFilters: (newFilters: Filters) => void;
};

export interface SeveritySelectProps {
    severity?: Severity[];
    handleFilterChange?: (key: string, value: any) => void;
}

export interface DateRange {
    name?: 'all' | 'today' | 'this-week' | 'this-month' | 'custom';
    label?: string;
}

export interface PicklistValue {
    label?: string;
    name?: string | number;
    icon?: ReactNode;
    value?: any;
}

export interface ClientFilterTableProps {
    filters: Filters;
    collection: string;
    query?: (ref: Record<string, unknown>) => void;
}

export interface FilterDropdownProps {
    close: () => void;
}

export interface BaseProps {
    className?: string;
    style?: CSSProperties;
}

export interface IconProps extends BaseProps {
    title?: string;
}
