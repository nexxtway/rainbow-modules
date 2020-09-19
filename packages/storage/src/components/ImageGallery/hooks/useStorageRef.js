import { useMemo } from 'react';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';

export default function useStorageRef(props) {
    const { bucket } = props || {};
    const app = useFirebaseApp();

    return useMemo(() => app.storage(bucket).ref(), [app, bucket]);
}
