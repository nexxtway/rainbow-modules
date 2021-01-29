import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Table, Column } from 'react-rainbow-components';
import { FilterFilled } from '@rainbow-modules/icons';
import { FloatingSearchButtonIcon, filterByFields } from '../../src';
import ColoredStatusColumn from '../../src/components/ColoredStatusColumn';

const initialData = [
    {
        customer: 'Carls Smith',
        trackingNumber: '6600802039',
        email: 'carlssmith@gmail.com',
        obj: { status: 'error' },
        id: '1234qwerty',
    },
    {
        customer: 'John Snow',
        trackingNumber: '6205259761',
        email: 'johnsnow@gmail.com',
        obj: { status: 'success' },
        id: '1234asdfgh',
    },
    {
        customer: 'Anna Adams',
        trackingNumber: '5402808861',
        email: 'annaadams@gmail.com',
        obj: { status: 'warning' },
        id: '1234zxcvbn',
    },
    {
        customer: 'Joe Smith',
        trackingNumber: '4144176404',
        email: 'joesmith@gmail.com',
        obj: { status: 'error' },
        id: '5678asdfgh',
    },
    {
        customer: 'John Doe',
        trackingNumber: '4943885659',
        email: 'johndoe@gmail.com',
        obj: { status: 'warning' },
        id: '5278aswegh',
    },
    {
        customer: 'Jane Adams',
        trackingNumber: '4943845759',
        email: 'janeadams@gmail.com',
        obj: { status: 'success' },
        id: '5178aswegh',
    },
    {
        customer: 'William Adams',
        trackingNumber: '6697683209',
        email: 'williamadams@gmail.com',
        obj: { status: 'arrived' },
        id: '5678qwerty',
    },
];

const Container = styled.div`
    padding: 2rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 0;
`;

const Title = styled.h1`
    font-size: 30px;
`;

export const FilterByFieldsExample = () => {
    const [value, setValue] = useState('');

    const filteredData = useMemo(
        () =>
            filterByFields({
                data: initialData,
                query: value,
                fields: ['customer', 'email', 'trackingNumber', 'obj.status'],
            }),
        [value],
    );

    const handleChange = (value) => {
        setValue(value);
    };

    return (
        <RainbowFirebaseApp>
            <Header>
                <Title>Customers:</Title>
                <FloatingSearchButtonIcon
                    shaded
                    variant="border-filled"
                    icon={<FilterFilled />}
                    value={value}
                    onChange={handleChange}
                />
            </Header>
            <Container>
                <Table data={filteredData} keyField="id" variant="listview">
                    <Column header="Customer" field="customer" />
                    <Column header="Email" field="email" />
                    <Column header="Tracking Number" field="trackingNumber" />
                    <Column header="Status" field="obj.status" component={ColoredStatusColumn} />
                </Table>
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Listview/Stories/FilterByFields',
};
