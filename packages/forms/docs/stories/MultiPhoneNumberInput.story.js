import React, { useState } from 'react';
import { Application, Button } from 'react-rainbow-components';
import ReactJson from 'react-json-view';
import { Field, UniversalForm } from '@rainbow-modules/forms';
import MultiPhoneNumber from '../../src/components/MultiPhoneNumberInput';

export const DefaultMultiPhoneNumberInput = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <MultiPhoneNumber
                label="Phone Numbers"
                value={value}
                onChange={setValue}
                error="An error ocurred"
            />
            <ReactJson src={value} />
        </Application>
    );
};

export const CustomMultiPhoneNumberInput = () => {
    const [value, setValue] = useState();
    const onAddPhoneNumber = (index) => {
        if (index === 0) {
            return [{ label: 'Patient primary phone', required: true }, { label: 'Note' }];
        }
        return [{ label: 'Patient family phone' }, { label: 'Note' }];
    };
    return (
        <Application>
            <MultiPhoneNumber
                label="Phone Numbers"
                value={value}
                onChange={setValue}
                onAddPhoneNumber={onAddPhoneNumber}
            />
            <ReactJson src={value} />
        </Application>
    );
};

export const FormMultiPhoneNumberInput = () => {
    const validate = (value) => {
        if (value) {
            if (value.length < 2) {
                return 'Too few phone numbers';
            }
            const rowErrors = {};
            value.forEach(([phone, note], index) => {
                const err = {};
                if (phone.isoCode !== 'us') {
                    err.phone = 'Only US numbers are accepted';
                }
                if (note.length < 3) {
                    err.note = 'Note is too short';
                }
                if (Object.keys(err).length) {
                    rowErrors[index] = err;
                }
            });
            if (Object.keys(rowErrors).length) {
                return rowErrors;
            }
        }
        return '';
    };

    const onSubmit = (values) => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <Application>
            <UniversalForm id="phones" onSubmit={onSubmit}>
                <Field
                    name="phones"
                    label="Phone numbers"
                    component={MultiPhoneNumber}
                    validate={validate}
                />
                <Button type="submit" label="Submit" />
            </UniversalForm>
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/MultiPhoneNumberInput',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
