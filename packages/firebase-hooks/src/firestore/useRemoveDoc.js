import { useMutation } from 'react-query';
import useFirebaseApp from '../useFirebaseApp';

const useRemoveDoc = (opts = {}) => {
    const app = useFirebaseApp();
    return useMutation((path) => {
        return app.firestore().doc(path).delete();
    }, opts);
};

export default useRemoveDoc;
