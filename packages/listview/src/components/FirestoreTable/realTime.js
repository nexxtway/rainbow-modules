import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-rainbow-components/components/Table';
import { useCollection } from '@rainbow-modules/firebase-hooks';
import getQuery from './getQuery';

const FirestoreTableRealTime = (props) => {
    const { children, collection, query, defaultSortDirection, sortedBy, ...rest } = props;
    const [sortDirection, setSortDirection] = useState(defaultSortDirection);
    const [data, isLoading] = useCollection({
        path: collection,
        query: getQuery({ query, sortedBy, sortDirection }),
        flat: true,
    });

    const handleSort = (event, field, nextSortDirection) => {
        setSortDirection(nextSortDirection);
    };

    return (
        <Table
            {...rest}
            keyField="id"
            data={data}
            isLoading={isLoading}
            onSort={handleSort}
            sortDirection={sortDirection}
            sortedBy={sortedBy}
        >
            {children}
        </Table>
    );
};

FirestoreTableRealTime.propTypes = {
    collection: PropTypes.string.isRequired,
    query: PropTypes.func,
    defaultSortDirection: PropTypes.oneOf(['asc', 'desc']),
    sortedBy: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FirestoreTableRealTime.defaultProps = {
    query: undefined,
    defaultSortDirection: 'asc',
    sortedBy: undefined,
    children: [],
};

export default FirestoreTableRealTime;
