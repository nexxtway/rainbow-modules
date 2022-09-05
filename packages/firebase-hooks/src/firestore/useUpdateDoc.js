import { useMutation } from 'react-query';
import doc from '../helpers/doc';
import updateDoc from '../helpers/updateDoc';
import useFirestore from './useFirestore';

const useUpdateDoc = (opts = {}) => {
    const firestore = useFirestore();

    return useMutation(({ path, data }) => {
        const ref = doc(firestore, path);
        return updateDoc(ref, data);
    }, opts);
};

export default useUpdateDoc;
