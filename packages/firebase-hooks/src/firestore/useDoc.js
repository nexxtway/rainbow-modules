import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getDocData from '../helpers/getDocData';

export default function useDoc(props) {
    const { path, flat = false } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (app) {
            const ref = app.firestore().doc(path);
            const unsubscribe = ref.onSnapshot(
                (doc) => {
                    if (doc.exists) {
                        setData(getDocData(doc, flat));
                    } else {
                        setData(null);
                    }
                    setIsLoading(false);
                },
                (err) => {
                    setIsLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(err);
                },
            );
            return () => {
                return unsubscribe();
            };
        }
        return null;
    }, [app, path, flat]);
    return [data, isLoading];
}
