import { CSSProperties, ReactNode } from 'react';

export interface TileProps {
    /** Text label of the element. */
    label?: string | ReactNode;
    /** The value of the element. */
    value?: number | string;
    /** The color of the text. */
    color?: string;
    /** The background color of the element. */
    backgroundColor?: string;
    /** The variant changes the appearance of the Tile. Accepted variants include default and badge. */
    variant?: 'default' | 'badge' | 'flat';
    /** It is a unique value that identifies the tile option. */
    name?: string;
    /** The id of the outer element. */
    id?: string;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied for the outer element. */
    style?: CSSProperties;
    /** The icon shown when the tile is selected. */
    selectedIcon?: ReactNode;
    /** If is set to true, then is showed a loading symbol. */
    isLoading?: boolean;
}

export default function (props: TileProps): JSX.Element | null;
