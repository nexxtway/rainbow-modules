/* eslint-disable react/prop-types */
/**
 * Taken from react-syntax-highlighter-virtualized-render
 */
import React from 'react';
import { AutoSizer, List } from 'react-virtualized';
import { createElement } from 'react-syntax-highlighter';

const rowRenderer = ({ rows, stylesheet, useInlineStyles }) => {
    return ({ index, key, style }) =>
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
        <div style={{ height: '100%' }}>
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        rowRenderer={rowRenderer({ rows, stylesheet, useInlineStyles })}
                        rowCount={rows.length}
                        overscanRowCount={overscanRowCount}
                    />
                )}
            </AutoSizer>
        </div>
    );
};

export default virtualizedRenderer;
