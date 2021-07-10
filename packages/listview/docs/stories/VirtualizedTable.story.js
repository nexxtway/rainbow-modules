import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Application, Button } from 'react-rainbow-components';
import VirtualizedTable, { useTableDataSource } from '../../src/components/VirtualizedTable';
import { dataTable } from './data/batchActionsBar';

const Container = styled.div`
    position: relative;
    height: 300px;
`;

export const BasicVirtualizedTable = () => {
    const data = useTableDataSource(dataTable);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingBottom, setIsLoadingBottom] = useState(false);
    const [isLoadingTop, setIsLoadingTop] = useState(false);
    const columnNames = ['name', 'company', 'status'];

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000);
    }, []);

    const insertItems = () => {
        data.insert([...dataTable], 5);
    };

    const deleteItems = () => {
        data.delete(3, 5);
    };

    const onLoadMore = useCallback(
        ({ direction }) => {
            if (direction === 'bottom') {
                setIsLoadingBottom(true);
                setTimeout(() => {
                    data.push([...dataTable]);
                    setIsLoadingBottom(false);
                }, 3000);
            }
            if (direction === 'top') {
                setIsLoadingTop(true);
                setTimeout(() => {
                    data.unshift([...dataTable]);
                    setIsLoadingTop(false);
                }, 3000);
            }
        },
        [data],
    );

    return (
        <Application>
            <Container>
                <div>
                    <Button label="Insert items" onClick={insertItems} />
                    <Button label="Delete items" onClick={deleteItems} />
                </div>
                <VirtualizedTable
                    data={data}
                    columns={columnNames}
                    isLoading={isLoading}
                    isLoadingBottom={isLoadingBottom}
                    isLoadingTop={isLoadingTop}
                    onLoadMore={onLoadMore}
                    enableInfinityScrollBottom
                    enableInfinityScrollTop
                />
            </Container>
        </Application>
    );
};

export const EmptyVirtualizedTable = () => {
    const columnNames = ['name', 'company', 'status'];

    return (
        <Application>
            <Container>
                <VirtualizedTable data={[]} columns={columnNames} />
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/VirtualizedTable',
};
