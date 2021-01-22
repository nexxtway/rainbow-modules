import { CSSProperties, MouseEvent } from 'react';

export interface DatePickerCarouselProps {
    /** Sets the date for the DatePicker programmatically. */
    value?: Date | string | Array<Date | string>;
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate?: Date;
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate?: Date;
    /**  The date format style to display in the input field.
     * Valid values are small, medium, and large. */
    formatStyle?: 'small' | 'medium' | 'large';
    /** The action triggered when a value attribute changes. */
    onChange?: (newValue: any) => void;
    /** Text that is displayed when the DatePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder?: string;
    /** Specifies that the DatePicker field must be filled out before submitting the form.
     * This value defaults to false. */
    required?: boolean;
    /** The name of the DatePicker. */
    name?: string;
    /** Specifies that the DatePicker is read-only. This value defaults to false. */
    readOnly?: boolean;
    /** Specifies that the DatePicker element should be disabled. This value defaults to false. */
    disabled?: boolean;
    /** The action triggered when the element is clicked. */
    onClick?: (event: MouseEvent) => void;
    /** The id of the outer element. */
    id?: string;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The DatePicker locale. Defaults to browser's language. */
    locale?: string;
    /** The type of the selection. It can be a single date or a range. The default value is 'single'. */
    selectionType?: 'single';
    /** The calendar variant. Defaults to 'single' */
    variant?: 'single' | 'double';
}

export default function (props: DatePickerCarouselProps): JSX.Element | null;
