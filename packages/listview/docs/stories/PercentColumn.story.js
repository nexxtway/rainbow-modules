import React from 'react';
import styled from 'styled-components';
import { Table, Column, Application } from 'react-rainbow-components';
import PercentColumn from '../../src/components/PercentColumn';
import ColoredStatusColumn from '../../src/components/ColoredStatusColumn';

const initialData = [
    {
        name: 'Carls Smith',
        status: 'canceled',
        company: 'Google',
        percent: 0.1,
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'John Snow',
        status: 'delivered',
        company: 'Google',
        percent: 0.0025,
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'Anna Adams',
        status: 'pending',
        company: 'Google',
        percent: 0.3045,
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'William Adams',
        status: 'arrived',
        company: 'Google',
        percent: 0,
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'Joe Smith',
        status: 'arrived',
        company: 'Google',
        percent: 0.8,
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'John Doe',
        status: 'arrived',
        company: 'Google',
        percent: 1,
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'Jane Adams',
        status: 'arrived',
        company: 'Google',
        percent: 1.2,
        createdAt: '09/06/2020 09:00 AM',
    },
];

const Container = styled.div`
    padding: 2rem;
`;

const colors = {
    canceled: { backgroundColor: '#f2707a', color: 'rgba(255, 255, 255)' },
    delivered: '#009900',
    pending: { backgroundColor: '#EBC665', color: '#fff' },
    arrived: { backgroundColor: '#4dc9cb', color: '#fff' },
};

export const percentColumn = () => {
    return (
        <Application>
            <Container>
                <Table data={initialData} keyField="id" variant="listview" showCheckboxColumn>
                    <Column header="Created At" field="createdAt" />
                    <Column header="Name" field="name" />
                    <Column header="Company" field="company" />
                    <Column header="Percent" field="percent" component={PercentColumn} />
                    <Column
                        header="Status"
                        field="status"
                        colors={colors}
                        component={ColoredStatusColumn}
                    />
                </Table>
            </Container>
        </Application>
    );
};

export const percentWithIntlOptionColumn = () => {
    return (
        <Application>
            <Container>
                <Table data={initialData} keyField="id" variant="listview" showCheckboxColumn>
                    <Column header="Created At" field="createdAt" />
                    <Column header="Name" field="name" />
                    <Column header="Company" field="company" />
                    <Column
                        header="Percent"
                        field="percent"
                        component={PercentColumn}
                        minimumFractionDigits={1}
                        maximumFractionDigits={2}
                    />
                    <Column
                        header="Status"
                        field="status"
                        colors={colors}
                        component={ColoredStatusColumn}
                    />
                </Table>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/PercentColumn',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
