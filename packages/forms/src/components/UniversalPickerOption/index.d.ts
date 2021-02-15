import { CSSProperties, ElementType, ReactNode } from 'react';

export interface UniversalPickerOptionProps {
    /** Functional component or class that will be rendered with the props:
     * name, disabled, multiple, groupName, value and the state isSelected and isFocused. */
    component?: ElementType;
    /** It is a unique value that identifies the picker option. */
    name?: string;
    /** Specifies that an UniversalPickerItem element should be disabled.
     * This value defaults to false. */
    disabled?: boolean;
    /** The id of the outer element. */
    id?: string;
    /** The class name of the root element. */
    className?: string;
    /** It is an object with custom style applied to the root element. */
    style?: CSSProperties;
    children?: ReactNode;
}

export default function (props: UniversalPickerOptionProps): JSX.Element | null;
