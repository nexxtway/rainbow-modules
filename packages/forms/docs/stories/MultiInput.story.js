import React, { useState } from 'react';
import { Application, Button, GoogleAddressLookup, PhoneInput } from 'react-rainbow-components';
import ReactJson from 'react-json-view';
import { Field, UniversalForm } from '@rainbow-modules/forms';
import MultiInput from '../../src/components/MultiInput';

const GOOGLE_MAPS_APIKEY = process.env.STORYBOOK_GOOGLE_MAPS_APIKEY;

export const DefaultMultiInput = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <MultiInput label="Text" value={value} onChange={setValue} error="An error ocurred" />
            <ReactJson src={value} />
        </Application>
    );
};

export const RemoveNoteInput = () => {
    const [value, setValue] = useState();
    const onAdd = (index) => {
        return [{ label: `Patient #${index + 1}` }];
    };
    return (
        <Application>
            <MultiInput label="Patient List" value={value} onChange={setValue} onAdd={onAdd} />
            <ReactJson src={value} />
        </Application>
    );
};

export const FormMultiAddressInput = () => {
    const [value, setValue] = useState();
    const onAdd = (index) => {
        if (index === 0) {
            return [{ label: 'Patient primary address', required: true }, { label: 'Note' }];
        }
        return [{ label: 'Patient family address' }, { label: 'Note' }];
    };
    return (
        <Application>
            <MultiInput
                label="Addresses"
                value={value}
                onChange={setValue}
                onAdd={onAdd}
                component={(props) => (
                    <GoogleAddressLookup apiKey={GOOGLE_MAPS_APIKEY} {...props} />
                )}
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
            value.forEach(([inputValue, note], index) => {
                const err = {};
                if (inputValue && inputValue.isoCode !== 'us') {
                    err.value = 'Only US numbers are accepted';
                }
                if (!note || note.length < 3) {
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
                    component={(props) => <MultiInput component={PhoneInput} {...props} />}
                    validate={validate}
                />
                <Button type="submit" label="Submit" />
            </UniversalForm>
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/MultiInput',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
