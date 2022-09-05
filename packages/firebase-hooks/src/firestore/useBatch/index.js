import batchSplit from './batchSplit';
import batchUpdate from './batchUpdate';
import batchSet from './batchSet';
import batchAdd from './batchAdd';
import batchDelete from './batchDelete';
import useFirestore from '../useFirestore';

const useBatch = ({ collection }) => {
    const db = useFirestore();
    return {
        batchUpdate: (data) => batchSplit({ db, collection, data, action: batchUpdate }),
        batchSet: (data, options) =>
            batchSplit({ db, collection, data, action: batchSet, options }),
        batchAdd: (data) => batchSplit({ db, collection, data, action: batchAdd }),
        batchDelete: (data) => batchSplit({ db, collection, data, action: batchDelete }),
    };
};

export default useBatch;
