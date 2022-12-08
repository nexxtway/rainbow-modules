import { useMemo } from 'react';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import { getStorage, ref } from 'firebase/storage';

export default function useStorageRef(props) {
    const { bucket } = props || {};
    const app = useFirebaseApp();

    return useMemo(() => {
        if (app.storage) {
            return app.storage(bucket).ref();
        }
        return ref(getStorage(app, bucket));
    }, [app, bucket]);
}
