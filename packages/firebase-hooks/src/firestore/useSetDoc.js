import { useMutation } from 'react-query';
import doc from '../helpers/doc';
import setDoc from '../helpers/setDoc';
import useFirestore from './useFirestore';

const useSetDoc = (opts = {}) => {
    const firestore = useFirestore();

    return useMutation(({ path, data, options }) => {
        const ref = doc(firestore, path);
        return setDoc(ref, data, options);
    }, opts);
};

export default useSetDoc;
