/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import FirestoreTableFetchOnce from './fetchOnce';
import FireStoreTableRealTime from './realTime';

const FirestoreTable = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fetchOnce, children, onSort, sortDirection, ...rest } = props;
    if (fetchOnce) {
        return <FirestoreTableFetchOnce {...rest}>{children}</FirestoreTableFetchOnce>;
    }
    return <FireStoreTableRealTime {...rest}>{children}</FireStoreTableRealTime>;
};

FirestoreTable.propTypes = {
    /** The path of the Firestore collection e.g. `/books` */
    collection: PropTypes.string.isRequired,
    /** Query function for firestore. */
    query: PropTypes.func,
    /** It fetch the collection data once. */
    fetchOnce: PropTypes.bool,
    /** Specifies the default sorting direction on an unsorted column. Valid options include 'asc' and 'desc'.
     * The default is 'asc' for sorting in ascending order. */
    defaultSortDirection: PropTypes.oneOf(['asc', 'desc']),
    /** The column fieldName that controls the sorting order. */
    sortedBy: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The variant of the table. */
    variant: 'default' | 'listview',
};

FirestoreTable.defaultProps = {
    query: undefined,
    fetchOnce: false,
    defaultSortDirection: 'asc',
    sortedBy: undefined,
    children: [],
    variant: 'default',
};

export default FirestoreTable;
