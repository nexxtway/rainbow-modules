import { ComponentType, CSSProperties, ReactNode } from 'react';

export interface RecordFieldProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The label of the component. */
    label?: ReactNode;
    /** The value of the component. */
    value?: ReactNode | Record<string, unknown>;
    /** The type prop specifies the format that the component will have, by default is text. */
    type?: 'text' | 'currency' | 'number' | 'percent' | 'date' | 'time' | 'dateTime' | 'url';
    /** Specifies whether data is being loaded. The default is false. */
    isLoading?: boolean;
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon?: ReactNode;
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition?: 'left' | 'right';
    /** A string that define the type of currency, the default value is USD */
    currency?: string;
    /** A string with the url when the type of the field is url */
    href?: string;
    /** The action triggered when click on the url when the type is url. */
    onClick?: (event: MouseEvent) => void;
    /**
     * The component class or function that is going to be render if you pass a custom component to the RecordField
     */
    component?: ComponentType;
}

export default function (props: RecordFieldProps): JSX.Element | null;
