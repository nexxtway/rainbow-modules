import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-rainbow-components/components/Table';
import { useCollectionOnce } from '@rainbow-modules/firebase-hooks';

const FirestoreTableFetchOnce = (props) => {
    const { children, collection, ...rest } = props;
    const [data, isLoading] = useCollectionOnce({ path: collection });
    return (
        <Table {...rest} keyField="id" data={data} isLoading={isLoading}>
            {children}
        </Table>
    );
};

FirestoreTableFetchOnce.propTypes = {
    collection: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FirestoreTableFetchOnce.defaultProps = {
    children: [],
};

export default FirestoreTableFetchOnce;
