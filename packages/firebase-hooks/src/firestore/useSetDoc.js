import { useMutation } from 'react-query';
import useFirebaseApp from '../useFirebaseApp';

const useSetDoc = (opts = {}) => {
    const app = useFirebaseApp();
    return useMutation(({ path, data, options }) => {
        return app.firestore().doc(path).set(data, options);
    }, opts);
};

export default useSetDoc;
