import React from 'react';
import styled from 'styled-components';
import { Table, Column } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const initialData = [
    {
        customer: 'Carls Smith',
        trackingNumber: '6600802039',
        email: 'carlssmith@gmail.com',
        status: 'canceled',
        id: '1234qwerty',
    },
    {
        customer: 'John Snow',
        trackingNumber: '6205259761',
        email: 'johnsnow@gmail.com',
        status: 'delivered',
        id: '1234asdfgh',
    },
    {
        customer: 'Anna Adams',
        trackingNumber: '5402808861',
        email: 'annaadams@gmail.com',
        status: 'pending',
        id: '1234zxcvbn',
    },
    {
        customer: 'William Adams',
        trackingNumber: '6697683209',
        email: 'williamadams@gmail.com',
        status: 'arrived',
        id: '5678qwerty',
    },
    {
        customer: 'Joe Smith',
        trackingNumber: '4144176404',
        email: 'joesmith@gmail.com',
        status: 'arrived',
        id: '5678asdfgh',
    },
    {
        customer: 'John Doe',
        trackingNumber: '4943885659',
        email: 'johndoe@gmail.com',
        status: 'arrived',
        id: '5278aswegh',
    },
    {
        customer: 'Jane Adams',
        trackingNumber: '4943845759',
        email: 'janeadams@gmail.com',
        status: 'arrived',
        id: '5178aswegh',
    },
];

export const BasicTable = () => {
    return (
        <Container>
            <Table
                id="table-1"
                data={initialData}
                keyField="id"
                variant="listview"
                showCheckboxColumn
            >
                <Column header="Customer" field="customer" />
                <Column header="Email" field="email" />
                <Column header="Tracking Number" field="trackingNumber" />
            </Table>
        </Container>
    );
};

export default {
    title: 'Modules/Cypress/Stories/Table',
};
