import React from 'react';
import styled from 'styled-components';
import ReactJson from 'react-json-view';
import { Table, Column, Card } from 'react-rainbow-components';
import { useCollectionOnce } from '@rainbow-modules/firebase-hooks';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';

const books = () => {
    const [books] = useCollectionOnce({ path: 'books' });
    return <ReactJson src={books} />;
};

const ContentCard = styled(Card)`
    margin: 32px;
`;

const Header = styled.div`
    padding: 12px 20px;
    background: rgba(239, 241, 245, 1);
`;

const Title = styled.h1`
    font-size: 24px;
    color: rgba(63, 73, 84, 1);
`;

const Description = styled.h1`
    font-size: 14px;
    color: rgba(63, 73, 84, 1);
`;

export const firebaseHooks = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <ContentCard>
                <Header>
                    <Title>Your Books</Title>
                    <Description>Total Amount</Description>
                </Header>
                <Table data={books} keyField="id">
                    <Column header="Name" field="name" />
                    <Column header="Author" field="author" />
                    <Column header="Release Date" field="date" />
                </Table>
            </ContentCard>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'App/Stories',
    component: RainbowFirebaseApp,
};
