export interface OnChangeProps {
    oldName: string;
    newName?: string;
    value?: string;
}

/**
 * Change handler for the label filters.
 *
 * When `newName` is undefined, removes the filter stored in `oldName`. If `oldName` and `newName` are different,
 * changes the label name keeping its value. If `oldName` and `newName` are equal updates the value.
 * @param value The new filter value
 */
export type OnChangeFunction = ({ oldName, newName, value }: OnChangeProps) => void;
