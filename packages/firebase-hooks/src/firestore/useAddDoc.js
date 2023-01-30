import { useMutation } from 'react-query';
import { addDoc, collection } from 'firebase/firestore';
import useFirestore from './useFirestore';

const useAddDoc = (path, opts = {}) => {
    const firestore = useFirestore();

    return useMutation((data) => {
        const ref = collection(firestore, path);
        return addDoc(ref, data);
    }, opts);
};

export default useAddDoc;
