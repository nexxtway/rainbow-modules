import { ReactNode } from 'react';

type ColorObject = {
    backgroundColor?: string;
    color?: string;
};

type ColorType = {
    [prop: string]: ColorObject | string;
};

type ChangeValue = {
    row: Record<string, unknown>;
    value: string;
};

export interface ColoredStatusColumnProps {
    /** An object containing the data of the row */
    row?: Record<string, unknown>;
    /** A string that comes from the data and is displayed in the table cell  */
    value?: string;
    /** An object with the mapping that indicates the backgroundColor and color of the component */
    colors?: ColorType;
    /** A string that indicates the format of the font capitalize | uppercase | lowercase */
    textTransform?: string;
    /** A boolean that specifies whether a column is editable or not. Its default value is false.  */
    isEditable?: boolean;
    /** The action triggered when a value attribute changes. */
    onChange?: (value: ChangeValue) => void;
    /** Text or component to show at the top of the dropdown */
    dropdownHeader?: ReactNode;
}

export default function (props: ColoredStatusColumnProps): JSX.Element | null;
