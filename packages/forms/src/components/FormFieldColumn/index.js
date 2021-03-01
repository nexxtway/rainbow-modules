import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import EditableCell from './editableCell';

const FormFieldColumn = (props) => {
    const {
        row,
        value,
        index,
        name,
        isEditable,
        cellComponent: Component,
        validate,
        parse,
        format,
        type,
    } = props;
    const data = {
        row,
        value,
        index,
    };
    const fieldName = typeof name === 'function' ? name(data) : name;
    const isEditableFunction = typeof isEditable === 'function';
    const isEditableResult = isEditableFunction ? isEditable(data) : isEditable;

    return (
        <Field
            name={fieldName}
            component={EditableCell}
            isEditable={isEditableResult}
            isEditableFunction={isEditableFunction}
            row={row}
            index={index}
            columnComponent={Component}
            columnValidate={validate}
            type={type}
            parse={parse}
            format={format}
        />
    );
};

FormFieldColumn.propTypes = {
    /** Row data injected by the Table component. */
    row: PropTypes.object,
    /** Cell value injected by the Table component. */
    value: PropTypes.any,
    /** Row index injected by the Table component. */
    index: PropTypes.number,
    /** The name of the editable input field. It can be a simple string value or a function
     * that receive the row, value and index and based on this data you can construct the name string returned.
     */
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    /** Indicates whether the cell is editable or not. It can be a boolean value or a function that receive
     * the row, value and index and based on this data you can return a boolean.
     */
    isEditable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    /** The component class or function that is going to be use to render
     * the content of each cell on this column cell component.
     */
    cellComponent: PropTypes.func,
    /** A function that takes the field value, all the values of the form and the meta data about the field and returns an error
     * if the value is invalid, or undefined if the value is valid. */
    validate: PropTypes.func,
    /** A function that takes the value from the input and name of the field and converts the value into the value you want stored
     * as this field's value in the form. Common usecases include converting strings into Numbers or parsing
     * localized dates into actual javascript Date objects.
     * Almost always used in conjuction with format.
     */
    parse: PropTypes.func,
    /** A function that takes the value from the form values and the name of the field and formats the value to give to the input.
     * Common use cases include converting javascript Date values into a localized date string.
     * Almost always used in conjunction with parse.
     */
    format: PropTypes.func,
    /** Field input type. */
    type: PropTypes.oneOf(['text', 'number']),
};

FormFieldColumn.defaultProps = {
    row: undefined,
    value: undefined,
    index: undefined,
    isEditable: false,
    cellComponent: undefined,
    validate: undefined,
    parse: undefined,
    format: undefined,
    type: 'text',
};

export default FormFieldColumn;
