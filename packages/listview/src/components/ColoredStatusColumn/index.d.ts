interface ColorObject {
    backgroundColor?: string;
    color?: string;
}

export interface ColoredStatusColumnProps {
    /** A string that comes from the data and is displayed in the table cell  */
    value?: string;
    /** An object with the mapping that indicates the backgroundColor and color of the component */
    colors?: Record<string, string> | ColorObject;
    /** A string that indicates the format of the font capitalize | uppercase | lowercase */
    textTransform?: string;
}

export default function (props: ColoredStatusColumnProps): JSX.Element | null;
