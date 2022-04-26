import React from 'react';
import styled from 'styled-components';
import { Table, Column, Application } from 'react-rainbow-components';
import NavigationButtonColumn from '../../src/components/NavigationButtonColumn';
import ColoredStatusColumn from '../../src/components/ColoredStatusColumn';

const initialData = [
    {
        name: 'Carls Smith',
        trackingNumber: '6600802039',
        email: 'carlssmith@gmail.com',
        status: 'canceled',
        id: '1234qwerty',
        company: 'Google',
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'John Snow',
        trackingNumber: '6205259761',
        email: 'johnsnow@gmail.com',
        status: 'delivered',
        id: '1234asdfgh',
        company: 'Google',
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'Anna Adams',
        trackingNumber: '5402808861',
        email: 'annaadams@gmail.com',
        status: 'pending',
        id: '1234zxcvbn',
        company: 'Google',
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'William Adams',
        trackingNumber: '6697683209',
        email: 'williamadams@gmail.com',
        status: 'arrived',
        id: '5678qwerty',
        company: 'Google',
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'Joe Smith',
        trackingNumber: '4144176404',
        email: 'joesmith@gmail.com',
        status: 'arrived',
        id: '5678asdfgh',
        company: 'Google',
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'John Doe',
        trackingNumber: '4943885659',
        email: 'johndoe@gmail.com',
        status: 'arrived',
        id: '5278aswegh',
        company: 'Google',
        createdAt: '09/06/2020 09:00 AM',
    },
    {
        name: 'Jane Adams',
        trackingNumber: '4943845759',
        email: 'janeadams@gmail.com',
        status: 'arrived',
        id: '5178aswegh',
        company: 'Google',
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

const handleIdOnClick = ({ value }) => {
    // eslint-disable-next-line no-alert
    alert(`Clicked id: ${value}`);
};

export const navigationButtonColumn = () => {
    return (
        <Application>
            <Container>
                <Table data={initialData} keyField="id" variant="listview" showCheckboxColumn>
                    <Column header="Created At" field="createdAt" />
                    <Column
                        header="id"
                        field="id"
                        component={NavigationButtonColumn}
                        onClick={handleIdOnClick}
                    />
                    <Column header="Name" field="name" />
                    <Column header="Company" field="company" />
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

const StyledNavigationButtonColumn = styled(NavigationButtonColumn)`
    text-align: left;
`;

export const navigationButtonColumnWithStyled = () => {
    return (
        <Application>
            <Container>
                <Table data={initialData} keyField="id" variant="listview" showCheckboxColumn>
                    <Column header="Created At" field="createdAt" />
                    <Column
                        header="id"
                        field="id"
                        component={StyledNavigationButtonColumn}
                        onClick={handleIdOnClick}
                    />
                    <Column header="Name" field="name" />
                    <Column header="Company" field="company" />
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
    title: 'Modules/Listview/Stories/NavigationButtonColumn',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
