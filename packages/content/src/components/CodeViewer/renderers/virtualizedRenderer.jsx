/* eslint-disable react/prop-types */
/**
 * Taken from react-syntax-highlighter-virtualized-render
 */
import React from 'react';
import styled from 'styled-components';
import { AutoSizer, Grid } from 'react-virtualized';
import { createElement } from 'react-syntax-highlighter';

const ListContainer = styled.div`
    height: 100%;
`;

const gridStyles = {
    overflow: 'auto',
};

const gridInnerContainerStyles = {
    overflow: 'visible',
    width: 'auto',
    minWidth: 'max-content',
    maxWidth: 'auto',
};

const rowRenderer = ({ rows, stylesheet, useInlineStyles }) => {
    return ({ rowIndex: index, key, style }) =>
        createElement({
            node: rows[index],
            stylesheet,
            style,
            useInlineStyles,
            key,
        });
};

const virtualizedRenderer = ({ overscanRowCount = 10, rowHeight = 15 } = {}) => {
    return ({ rows, stylesheet, useInlineStyles }) => (
        <ListContainer>
            <AutoSizer>
                {({ width, height }) => (
                    <Grid
                        width={width}
                        height={height}
                        rowHeight={rowHeight}
                        columnCount={1}
                        columnWidth={width}
                        rowCount={rows.length}
                        cellRenderer={rowRenderer({ rows, stylesheet, useInlineStyles })}
                        overscanRowCount={overscanRowCount}
                        style={gridStyles}
                        containerStyle={gridInnerContainerStyles}
                    />
                )}
            </AutoSizer>
        </ListContainer>
    );
};

export default virtualizedRenderer;
