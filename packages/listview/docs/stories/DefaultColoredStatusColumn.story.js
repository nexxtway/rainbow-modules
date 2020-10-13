import React from 'react';
import styled from 'styled-components';
import { Table, Column, Application } from 'react-rainbow-components';

import ColoredStatusColumn from '../../src/components/ColoredStatusColumn';

const initialData = [
    {
        customer: 'Carls Smith',
        trackingNumber: '6600802039',
        email: 'carlssmith@gmail.com',
        status: 'error',
        id: '1234qwerty',
    },
    {
        customer: 'John Snow',
        trackingNumber: '6205259761',
        email: 'johnsnow@gmail.com',
        status: 'success',
        id: '1234asdfgh',
    },
    {
        customer: 'Anna Adams',
        trackingNumber: '5402808861',
        email: 'annaadams@gmail.com',
        status: 'warning',
        id: '1234zxcvbn',
    },
    {
        customer: 'Joe Smith',
        trackingNumber: '4144176404',
        email: 'joesmith@gmail.com',
        status: 'error',
        id: '5678asdfgh',
    },
    {
        customer: 'John Doe',
        trackingNumber: '4943885659',
        email: 'johndoe@gmail.com',
        status: 'warning',
        id: '5278aswegh',
    },
    {
        customer: 'Jane Adams',
        trackingNumber: '4943845759',
        email: 'janeadams@gmail.com',
        status: 'success',
        id: '5178aswegh',
    },
    {
        customer: 'William Adams',
        trackingNumber: '6697683209',
        email: 'williamadams@gmail.com',
        status: 'arrived',
        id: '5678qwerty',
    },
];

const Container = styled.div`
    padding: 2rem;
`;

const CustomColoredStatusColumn = ({ ...props }) => <ColoredStatusColumn {...props} />;

export const defaultColoredStatusColumn = () => {
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
