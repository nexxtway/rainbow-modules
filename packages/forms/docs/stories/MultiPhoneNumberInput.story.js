import React, { useState } from 'react';
import { Application } from 'react-rainbow-components';
import ReactJson from 'react-json-view';
import MultiPhoneNumber from '../../src/components/MultiPhoneNumberInput';

export const DefaultMultiPhoneNumberInput = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <MultiPhoneNumber label="Phone Numbers" value={value} onChange={setValue} />
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

export default {
    title: 'Modules/Forms/Stories/MultiPhoneNumberInput',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
