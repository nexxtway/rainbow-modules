import React, { ReactElement } from 'react';
import { LoadingShape } from 'react-rainbow-components';
import {
    Column,
    Index,
    IndexRange,
    OverscanIndexRange,
    Table,
    TableCellProps,
    TableHeaderProps,
    TableHeaderRowProps,
    TableRowProps,
    Size,
} from 'react-virtualized';
import EmptyIcon from './emptyIcon';
import getRandomWidth from './helpers/getRandomWidth';
import useDataHandler from './hooks/useDataHandler';
import {
    Container,
    StyledCell,
    StyledCellContent,
    StyledHeaderContainer,
    StyledRow,
    StyledHeader,
    StyledRowHeader,
    StyledEmptyBody,
    StyledEmptyContainer,
    StyledEmptyTitle,
    StyledEmptyDescription,
    StyledEmptyIcon,
} from './styled';
import { ColumnProps, VirtualizedTableProps } from './types';

const VirtualizedTable = ({
    data: dataInProps,
    isLoading,
    isLoadingBottom,
    isLoadingTop,
    enableInfinityScrollBottom,
    enableInfinityScrollTop,
    onLoadMore,
    children,
}: VirtualizedTableProps): React.ReactElement | null => {
    const [data, itemPosition, prevStartIndex, prevStopIndex] = useDataHandler(dataInProps);

    const dataLength = data?.length ?? 0;
    const extraRows = [isLoadingBottom, isLoadingTop].reduce(
        (acc, value) => (value ? acc + 1 : acc),
        0,
    );
    const rowCount = isLoading ? 4 : dataLength + extraRows;

    const headerRowRenderer = ({
        className,
        style,
        columns: headerColumns,
    }: TableHeaderRowProps) => {
        return (
            <StyledRowHeader className={className} style={style} role="row">
                {headerColumns}
            </StyledRowHeader>
        );
    };

    const headerRenderer = (props: TableHeaderProps) => {
        return (
            <StyledHeader>
                <StyledHeaderContainer
                    className="rainbow-table_header-container"
                    role="presentation"
                >
                    {props.label}
                </StyledHeaderContainer>
            </StyledHeader>
        );
    };

    const cellRenderer = ({ cellData, rowIndex }: TableCellProps) => {
        if (isLoading) {
            const style = {
                width: getRandomWidth(),
            };
            return (
                <StyledCell>
                    <StyledCellContent>
                        <LoadingShape style={style} />
                    </StyledCellContent>
                </StyledCell>
            );
        }
        if ((isLoadingBottom && rowIndex === rowCount - 1) || (isLoadingTop && rowIndex === 0)) {
            const style = {
                width: '60%',
            };
            return (
                <StyledCell>
                    <StyledCellContent>
                        <LoadingShape style={style} />
                    </StyledCellContent>
                </StyledCell>
            );
        }
        return (
            <StyledCell>
                <StyledCellContent>{cellData}</StyledCellContent>
            </StyledCell>
        );
    };

    const rowGetter = ({ index }: Index) => {
        const normalizedIndex = isLoadingTop ? index - 1 : index;
        if (data) return data[normalizedIndex] ?? {};
        return {};
    };

    const rowRenderer = (info: TableRowProps) => {
        const { className, style, key, columns: rowColumns } = info;

        return (
            <StyledRow className={className} style={style} key={key} role="row">
                {rowColumns}
            </StyledRow>
        );
    };

    const noRowsRenderer = () => (
        <StyledEmptyBody>
            <StyledEmptyContainer>
                <StyledEmptyIcon>
                    <EmptyIcon />
                </StyledEmptyIcon>
                <StyledEmptyTitle>It’s empty here</StyledEmptyTitle>
                <StyledEmptyDescription>
                    Our robots did not find any match...
                </StyledEmptyDescription>
            </StyledEmptyContainer>
        </StyledEmptyBody>
    );

    const handleRowsRendered = ({ startIndex, stopIndex }: IndexRange & OverscanIndexRange) => {
        if (!onLoadMore) return;
        const currentPrevStartIndex = prevStartIndex.current ?? 0;
        const currentPrevStopIndex = prevStopIndex.current ?? 0;
        if (
            enableInfinityScrollBottom &&
            currentPrevStopIndex < stopIndex &&
            stopIndex === dataLength - 1
        ) {
            onLoadMore({ direction: 'bottom' });
        } else if (
            enableInfinityScrollTop &&
            currentPrevStartIndex > startIndex &&
            startIndex === 0
        ) {
            onLoadMore({ direction: 'top' });
        }
        prevStartIndex.current = startIndex;
        prevStopIndex.current = stopIndex;
    };

    const columns = React.Children.map(children, (child) => {
        const {
            props: { field, label },
        } = child as ReactElement<ColumnProps>;

        if (!field) return null;

        return (
            <Column
                key={field}
                label={label ?? field}
                dataKey={field}
                width={100}
                headerRenderer={headerRenderer}
                cellRenderer={cellRenderer}
                flexGrow={1}
            />
        );
    });

    return (
        <Container>
            {({ width, height }: Size) => (
                <Table
                    width={width || 100}
                    height={height || 100}
                    headerHeight={50}
                    rowHeight={50}
                    rowCount={rowCount}
                    rowGetter={rowGetter}
                    onRowsRendered={handleRowsRendered}
                    rowRenderer={rowRenderer}
                    noRowsRenderer={noRowsRenderer}
                    headerRowRenderer={headerRowRenderer}
                    scrollToIndex={itemPosition}
                    scrollToAlignment="start"
                >
                    {columns}
                </Table>
            )}
        </Container>
    );
};

export default VirtualizedTable;
export { default as Column } from './column';
export { default as useTableDataSource } from './hooks/useTableDataSource';
