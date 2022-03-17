import { ReactNode } from 'react';
import { LabelAlignment } from 'react-rainbow-components/components/types';

interface Value {
    isoCode: string;
}

export interface CountryPickerProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** Specifies the selected value of the picker. */
    value?: Value;
    /** The action triggered when click/select an option. */
    onChange?: (value: Value) => void;
    /** Text label for the picker. */
    label?: ReactNode;
    /** Describes the position of the label. Options include left, center and right. This value defaults to center. */
    labelAlignment?: LabelAlignment;
    /** A boolean to hide the label. */
    hideLabel?: boolean;
    /** Specifies that an option must be selected before submitting the form. This value defaults to false. */
    required?: boolean;
    /** Specifies that the picker is disabled. This value defaults to false. */
    disabled?: boolean;
    /** Specifies that the picker is read-only. This value defaults to false. */
    readOnly?: boolean;
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder?: string;
    /** The name of the picker. */
    name?: string;
    /** Specifies that the picker must be filled out before submitting the form. */
    error?: ReactNode;
    /** A component that is displayed when no search matches are found */
    emptyComponent?: ReactNode;
    /** Specifies the ISO codes of the countries available for selection. */
    countries?: string[];
}

export default function (props: CountryPickerProps): JSX.Element | null;
