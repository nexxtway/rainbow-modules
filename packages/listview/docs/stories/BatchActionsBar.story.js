/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Table, Column, RenderIf } from 'react-rainbow-components';
import { Error, Trash } from '@rainbow-modules/icons';
import BatchActionsBar from '../../src/components/BatchActionsBar';
import { dataTable } from './data/batchActionsBar';

const StyledButton = styled(Button)`
    margin-left: 10px;
`;

const fixedStyle = { position: 'absolute' };
const iconStyle = { width: 15, marginRight: 5 };

export const basicBatchActionsBar = () => {
    return (
        <BatchActionsBar
            label="Rides Selected"
            itemsLength={2}
            // eslint-disable-next-line no-alert
            onRequestClose={() => alert('Request Close Batch Actions Bar')}
            style={fixedStyle}
        >
            <StyledButton variant="border-filled">
                <Error style={iconStyle} />
                Edit
            </StyledButton>
            <StyledButton variant="destructive">
                <Trash style={iconStyle} />
                Delete
            </StyledButton>
        </BatchActionsBar>
    );
};

const Container = styled.div`
    padding: 0 20px 50px 20px;
`;

const StyledStatus = styled.div`
    text-transform: capitalize;
    color: #fff;
    background-color: #f2707a;
`;

const CreatedAt = ({ value }) =>
    new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }).format(value);

const Status = ({ value }) => <StyledStatus>{value}</StyledStatus>;

const style = { left: 28, right: 30 };

export const TableWithBatchActionsBar = () => {
    const [data, setData] = useState(dataTable);
    const [rowSelection, setRowSelection] = useState([]);
    const [isVisible, setVisible] = useState(false);
    const { length: itemsLength } = rowSelection;

    useEffect(() => {
        setVisible(itemsLength > 0);
    }, [itemsLength]);

    const handleDelete = () => {
        const filteredData = data.filter(
            ({ id }) => !rowSelection.find(({ id: seletedId }) => id === seletedId),
        );
        setData(filteredData);
    };

    return (
        <Container>
            <Table
                data={data}
                keyField="id"
                variant="listview"
                showCheckboxColumn
                onRowSelection={setRowSelection}
            >
                <Column header="Created At" field="createdAt" component={CreatedAt} />
                <Column header="Id" field="id" />
                <Column header="Name" field="name" />
                <Column header="Company" field="company" />
                <Column header="Status" field="status" component={Status} />
            </Table>
            <RenderIf isTrue={isVisible}>
                <BatchActionsBar
                    label="Rides Selected"
                    itemsLength={itemsLength}
                    onRequestClose={() => setVisible(false)}
                    style={style}
                >
                    <StyledButton variant="destructive" onClick={handleDelete}>
                        <Trash style={iconStyle} />
                        Delete
                    </StyledButton>
                </BatchActionsBar>
            </RenderIf>
        </Container>
    );
};

export default {
    title: 'Modules|Listview/Stories/BatchActionsBar',
};
