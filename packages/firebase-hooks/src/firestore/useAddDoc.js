import { useMutation } from 'react-query';
import useFirebaseApp from '../useFirebaseApp';

const useAddDoc = (path, opts = {}) => {
    const app = useFirebaseApp();
    return useMutation((data) => {
        return app.firestore().collection(path).add(data);
    }, opts);
};

export default useAddDoc;
