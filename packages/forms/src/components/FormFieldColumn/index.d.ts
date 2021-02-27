import { ComponentType } from 'react';
import { FieldValidator } from 'final-form';

interface Data {
    index: number;
    value: unknown;
    row: Record<string, unknown>;
}

export interface Props<P> {
    /** Row data injected by the Table component. */
    row?: Record<string, unknown>;
    /** Cell value injected by the Table component. */
    value?: unknown;
    /** Row index injected by the Table component. */
    index?: number;
    /** The name of the editable input field. It can be a simple string value or a function
     * that receive the row, value and index and based on this data you can construct the name string returned.
     */
    name: string | ((data: Data) => string);
    /** Indicates whether the cell is editable or not. It can be a boolean value or a function that receive
     * the row, value and index and based on this data you can return a boolean.
     */
    isEditable?: boolean | ((data: Data) => boolean);
    /** The component class or function that is going to be use to render
     * the content of each cell on this column cell component.
     */
    cellComponent?: ComponentType<P>;
    /** A function that takes the field value, all the values of the form and the meta data about the field and returns an error
     * if the value is invalid, or undefined if the value is valid. */
    validate?: FieldValidator<Record<string, unknown>>;
    /** A function that takes the value from the input and name of the field and converts the value into the value you want stored
     * as this field's value in the form. Common usecases include converting strings into Numbers or parsing
     * localized dates into actual javascript Date objects.
     * Almost always used in conjuction with format.
     */
    parse?: (value: unknown, name: string) => unknown;
    /** A function that takes the value from the form values and the name of the field and formats the value to give to the input.
     * Common use cases include converting javascript Date values into a localized date string.
     * Almost always used in conjunction with parse.
     */
    format?: (value: unknown, name: string) => unknown;
    /** Field input type. */
    type?: 'text' | 'number';
}

export default function (props: Props): JSX.Element | null;
