/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, RefObject } from 'react';

export interface AuditLogsProps {
    collectionPath: string;
    labels?: string[];
    defaultFilter?: Record<string, any>;
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

export type Severity = 'debug' | 'info' | 'warning' | 'error';

export type LabelFilter = {
    name: string;
    value: string;
    index: number;
    label?: string;
};

export interface SeveritySelectProps {
    severity?: Severity[];
    handleFilterChange?: (key: string, value: any) => void;
}

export interface DateRange {
    name?: 'all' | 'today' | 'this-week' | 'this-month' | 'custom';
    label?: string;
}

export interface Filters {
    severity?: Severity[];
    dateRange?: DateRange;
    labels?: Record<string, string[]>;
}

export interface PicklistValue {
    label?: string;
    name?: string | number;
    icon?: ReactNode;
    value?: any;
}
