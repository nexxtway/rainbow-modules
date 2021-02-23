/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Application, Button } from 'react-rainbow-components';
import { CubeFilled } from '@rainbow-modules/icons';
import { UniversalForm, isRequired } from '@rainbow-modules/forms';
import RecordField from '../../src/components/RecordField';

const Container = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    margin: 36px;
`;

const useChangeLoading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return loading;
};

export const BasicRecordField = () => {
    const loading = useChangeLoading();

    return (
        <BrowserRouter>
            <Application>
                <Container>
                    <RecordField
                        label="Customer Name"
                        name="name"
                        isLoading={loading}
                        value="John Doe"
                    />
                </Container>
                <Container>
                    <RecordField
                        label="Customer Name"
                        name="name"
                        isLoading={loading}
                        value="John Doe"
                        icon={<CubeFilled />}
                    />
                </Container>
                <Container>
                    <RecordField
                        label="Customer Name"
                        name="name"
                        isLoading={loading}
                        value="John Doe"
                        icon={<CubeFilled />}
                        iconPosition="right"
                    />
                </Container>
                <Container>
                    <RecordField label="John Doe Url" name="name" type="url" value="/john-doe" />
                </Container>
                <Container>
                    <RecordField
                        label="React Router"
                        name="url"
                        type="url"
                        value="https://reactrouter.com/web/api/Link"
                        target="_blank"
                    />
                </Container>
                <Container>
                    <RecordField
                        label="Date & Time"
                        name="datetime"
                        type="dateTime"
                        value={new Date()}
                        component={({ value }) => <span>{value.toString()}</span>}
                    />
                </Container>
            </Application>
        </BrowserRouter>
    );
};

const StyledUniversalForm = styled(UniversalForm)`
    display: flex;
    flex-direction: column;

    & > div {
        margin-bottom: 16px;
    }
`;

const SubmitButton = styled(Button)`
    margin-top: 16px;
    align-self: flex-end;
`;

const defaultValues = {
    name: 'John Doe',
    price: 10,
    amount: 1,
    commission: 0.1,
    date: new Date(),
    time: '13:30',
    website: 'https://mywebsite.com',
};

const FORM_ID = 'records-form';

export const EditableRecordField = () => {
    const [initialValues, setInitialValues] = useState(defaultValues);

    return (
        <Application>
            <Container>
                <StyledUniversalForm
                    id={FORM_ID}
                    initialValues={initialValues}
                    onSubmit={(value) => {
                        alert(JSON.stringify(value));
                        setInitialValues(value);
                    }}
                >
                    <RecordField
                        label="Customer Name"
                        name="name"
                        type="text"
                        isEditable
                        validate={isRequired()}
                    />
                    <RecordField label="Price" name="price" type="currency" isEditable />
                    <RecordField label="Amount" name="amount" type="number" isEditable />
                    <RecordField label="Commission" name="commission" type="percent" isEditable />
                    <RecordField label="Date" name="date" type="date" isEditable />
                    <RecordField label="Time" name="time" type="time" isEditable />
                    <RecordField
                        label="Website"
                        name="website"
                        type="url"
                        isEditable
                        target="_blank"
                    />
                    <SubmitButton label="Submit" type="submit" form={FORM_ID} />
                </StyledUniversalForm>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Record/Stories/RecordField',
};
