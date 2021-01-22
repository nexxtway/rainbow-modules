import { CSSProperties } from 'react';

interface SearchParams {
    query?: any;
}

export interface GlobalSearchProps {
    /** Event triggerd when select a search (select the first search option). It can be used for store recent searches. */
    onSearch?: (search: SearchParams) => void;
    /** Event triggered when select an option. */
    onSelect?: (item: any) => void;
    /** An array with the recent searches. */
    recents?: Array<string>;
    /** The variant changes the appearance of the GlobalSearch input. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant?: 'default' | 'shaded' | 'bare';
    /** The placeholder of the GlobalSearch input. */
    placeholder?: string;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    children?: ReactNode;
}

export default function (props: GlobalSearchProps): JSX.Element | null;
