import { useMutation } from 'react-query';
import useFirebaseApp from '../useFirebaseApp';

const useUpdateDoc = (opts = {}) => {
    const app = useFirebaseApp();
    return useMutation(({ path, data }) => {
        return app.firestore().doc(path).update(data);
    }, opts);
};

export default useUpdateDoc;
