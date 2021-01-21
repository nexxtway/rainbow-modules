/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Table, Column, Application } from 'react-rainbow-components';
import { Edit, Trash } from '@rainbow-modules/icons';
import BatchActionsBar from '../../src/components/BatchActionsBar';
import { dataTable } from './data/batchActionsBar';

const StyledButton = styled(Button)`
    margin-left: 20px;
`;

const StyledContainer = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

const iconStyle = { width: 15, marginRight: 5 };

export const basicBatchActionsBar = () => {
    return (
        <Application>
            <StyledContainer>
                <BatchActionsBar
                    label="Rides Selected"
                    itemsLength={2}
                    // eslint-disable-next-line no-alert
                    onRequestClose={() => alert('Request Close Batch Actions Bar')}
                    className="rainbow-m-top_medium"
                    isVisible
                >
                    <StyledButton variant="border-filled">
                        <Edit style={iconStyle} />
                        Edit
                    </StyledButton>
                    <StyledButton variant="destructive">
                        <Trash style={iconStyle} />
                        Delete
                    </StyledButton>
                </BatchActionsBar>
            </StyledContainer>
        </Application>
    );
};

const Container = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: fit-content;
`;

const StyledStatus = styled.div`
    text-transform: capitalize;
    color: #fff;
    background-color: #f2707a;
`;

const BarStyle = { position: 'absolute', bottom: '0' };

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
        <Application>
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
                <BatchActionsBar
                    label="Rides Selected"
                    itemsLength={itemsLength}
                    onRequestClose={() => setVisible(false)}
                    isVisible={isVisible}
                    style={BarStyle}
                >
                    <StyledButton variant="destructive" onClick={handleDelete}>
                        <Trash style={iconStyle} />
                        Delete
                    </StyledButton>
                </BatchActionsBar>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/BatchActionsBar',
};
