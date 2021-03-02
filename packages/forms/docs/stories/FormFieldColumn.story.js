import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Table, Column, Button } from 'react-rainbow-components';
import { FormattedNumber } from 'react-intl';
import UniversalForm from '../../src/components/UniversalForm';
import FormFieldColumn from '../../src/components/FormFieldColumn';
import firebase from '../../../../firebase';

const data = [
    {
        title: 'Speaking JavaScript',
        cost: [{ amount: 4045 }],
        fiveStarsPercent: 0.71,
        isEditable: false,
    },
    {
        title: 'JavaScript for impatient programmers',
        cost: [{ amount: 3155 }],
        fiveStarsPercent: 0.74,
        isEditable: true,
    },
    {
        title: 'Learning JavaScript',
        cost: [{ amount: 1924 }],
        fiveStarsPercent: 0.54,
        isEditable: true,
    },
];

const initialValues = {
    data,
};

const isEditableColumn = ({ row }) => row.isEditable;

export const Basic = () => {
    return (
        <RainbowFirebaseApp app={firebase}>
            <UniversalForm
                initialValues={initialValues}
                onSubmit={(value) => {
                    // eslint-disable-next-line no-alert
                    alert(JSON.stringify(value));
                }}
            >
                <Table data={data} keyField="title" variant="listview">
                    <Column
                        header="title"
                        field="title"
                        name={({ index }) => `data[${index}].title`}
                        isEditable={isEditableColumn}
                        component={FormFieldColumn}
                    />
                    <Column
                        header="cost"
                        field="cost"
                        name={({ index }) => `data[${index}].cost[0].amount`}
                        type="number"
                        isEditable={isEditableColumn}
                        component={FormFieldColumn}
                        cellAlignment="right"
                        cellComponent={({ value }) => {
                            return (
                                // eslint-disable-next-line react/style-prop-object
                                <FormattedNumber value={value} style="currency" currency="usd" />
                            );
                        }}
                        format={(value) => value / 100}
                        parse={(value) => value * 100}
                    />
                    <Column
                        header="Five Stars"
                        field="fiveStarsPercent"
                        name={({ index }) => `data[${index}].fiveStarsPercent`}
                        type="number"
                        isEditable={isEditableColumn}
                        component={FormFieldColumn}
                        cellAlignment="right"
                        cellComponent={({ value }) => {
                            // eslint-disable-next-line react/style-prop-object
                            return <FormattedNumber value={value / 100} style="percent" />;
                        }}
                        format={(value) => value * 100}
                        parse={(value) => value / 100}
                    />
                </Table>
                <Button className="rainbow-m-top_medium" type="submit" label="Submit" />
            </UniversalForm>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Forms/Stories/FormFieldColumn',
};
