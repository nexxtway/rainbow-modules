import { CSSProperties } from 'react';

export interface TilePickerProps {
    /** The name of TilePicker. */
    name?: string;
    /** The value of the element. */
    value?: string | Array<string>;
    /** The id of the outer element. */
    id?: string;
    /** The action triggered when a value attribute changes. */
    onChange?: (value: string | Array<string>) => void;
    /** The class name of the root element. */
    className?: string;
    /** It is an object with custom style applied to the root element. */
    style?: CSSProperties;
    /** If true then a multiple selection is allowed */
    multiple?: boolean;
    children?: ReactNode;
}

export default function (props: TilePickerProps): JSX.Element | null;
