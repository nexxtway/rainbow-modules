import React from 'react';
import styled from 'styled-components';
import { Table, Column, Application } from 'react-rainbow-components';

import ColoredStatusColumn from '../../src/components/ColoredStatusColumn';

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

const Container = styled.div`
    padding: 2rem;
`;

const colors = {
    canceled: { backgroundColor: '#f2707a', color: 'rgba(255, 255, 255)' },
    delivered: '#009900',
    pending: { backgroundColor: '#EBC665', color: '#fff' },
    arrived: { backgroundColor: '#4dc9cb', color: '#fff' },
};

const CustomColoredStatusColumn = ({ ...props }) => (
    <ColoredStatusColumn {...props} colors={colors} textTransform="uppercase" />
);

export const customColoredStatusColumn = () => {
    return (
        <Application>
            <Container>
                <Table data={initialData} keyField="id" variant="listview">
                    <Column header="Customer" field="customer" />
                    <Column header="Email" field="email" />
                    <Column header="Tracking Number" field="trackingNumber" />
                    <Column header="Status" field="status" component={CustomColoredStatusColumn} />
                </Table>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Listview/Stories',
};
