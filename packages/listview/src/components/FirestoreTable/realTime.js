import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-rainbow-components/components/Table';
import { useCollection } from '@rainbow-modules/firebase-hooks';

const FirestoreTableRealTime = (props) => {
    const { children, collection, query, ...rest } = props;
    const [data, isLoading] = useCollection({ path: collection, query });
    return (
        <Table {...rest} keyField="id" data={data} isLoading={isLoading}>
            {children}
        </Table>
    );
};

FirestoreTableRealTime.propTypes = {
    collection: PropTypes.string.isRequired,
    query: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FirestoreTableRealTime.defaultProps = {
    query: undefined,
    children: [],
};

export default FirestoreTableRealTime;
