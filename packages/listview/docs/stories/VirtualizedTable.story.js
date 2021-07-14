import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import VirtualizedTable, {
    useTableDataSource,
    Column,
} from '../../src/components/VirtualizedTable';
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

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000);
    }, []);

    const onLoadMore = useCallback(
        ({ direction }) => {
            if (direction === 'bottom') {
                setIsLoadingBottom(true);
                setTimeout(() => {
                    data.push({ data: [...dataTable] });
                    setIsLoadingBottom(false);
                }, 3000);
            }
            if (direction === 'top') {
                setIsLoadingTop(true);
                setTimeout(() => {
                    data.unshift({ data: [...dataTable] });
                    setIsLoadingTop(false);
                }, 3000);
            }
        },
        [data],
    );

    return (
        <Application>
            <Container>
                <VirtualizedTable
                    data={data}
                    isLoading={isLoading}
                    isLoadingBottom={isLoadingBottom}
                    isLoadingTop={isLoadingTop}
                    onLoadMore={onLoadMore}
                    enableInfinityScrollBottom
                    enableInfinityScrollTop
                >
                    <Column field="name" />
                    <Column field="company" />
                    <Column field="status" label="Current status" />
                </VirtualizedTable>
            </Container>
        </Application>
    );
};

export const EmptyVirtualizedTable = () => {
    return (
        <Application>
            <Container>
                <VirtualizedTable data={[]}>
                    <Column field="name" />
                    <Column field="company" />
                    <Column field="status" />
                </VirtualizedTable>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/VirtualizedTable',
};
