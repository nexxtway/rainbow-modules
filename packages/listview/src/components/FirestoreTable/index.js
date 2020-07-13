/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import FirestoreTableFetchOnce from './fetchOnce';
import FireStoreTableRealTime from './realTime';

const FirestoreTable = (props) => {
    const { fetchOnce, children, ...rest } = props;
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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FirestoreTable.defaultProps = {
    query: undefined,
    fetchOnce: false,
    children: [],
};

export default FirestoreTable;
