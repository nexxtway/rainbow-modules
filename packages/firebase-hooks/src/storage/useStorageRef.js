import { useContext } from 'react';
import Context from '../context';

export default function useStorageRef(props) {
    const { bucket } = props || {};
    const { app } = useContext(Context);

    return app.storage(bucket).ref();
}
