import { useFirebaseApp } from '@rainbow-modules/firebase-hooks/';

export default function useStorageRef(props) {
    const { bucket } = props || {};
    const app = useFirebaseApp();

    return app.storage(bucket).ref();
}
