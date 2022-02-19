import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Table, Column } from 'react-rainbow-components';
import app from '../../../../firebase';
import useCallableQuery from '../../src/http/useCallableQuery';

const Cards = () => {
    const { data, isLoading } = useCallableQuery('getCustomerCards');
    return (
        <Table data={data} keyField="id" isLoading={isLoading}>
            <Column header="brand" field="brand" />
            <Column header="last4" field="last4" />
            <Column header="exp Month" field="expMonth" />
            <Column header="exp Year" field="expYear" />
        </Table>
    );
};

export const useCallableQueryBasic = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Cards />
        </RainbowFirebaseApp>
    );
};
