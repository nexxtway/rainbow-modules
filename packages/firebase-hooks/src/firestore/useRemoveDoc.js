import { useMutation } from 'react-query';
import { doc, deleteDoc } from 'firebase/firestore';
import useFirestore from './useFirestore';

const useRemoveDoc = (opts = {}) => {
    const firestore = useFirestore();

    return useMutation((path) => {
        const ref = doc(firestore, path);
        return deleteDoc(ref);
    }, opts);
};

export default useRemoveDoc;
