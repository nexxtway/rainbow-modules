import { useMutation } from 'react-query';
import { doc, updateDoc } from 'firebase/firestore';
import useFirestore from './useFirestore';

const useUpdateDoc = (opts = {}) => {
    const firestore = useFirestore();

    return useMutation(({ path, data }) => {
        const ref = doc(firestore, path);
        return updateDoc(ref, data);
    }, opts);
};

export default useUpdateDoc;
