import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getDocData from '../helpers/getDocData';

export default function useDoc(props) {
    const { path, flat = false, disabled = false } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(!disabled);
    const [data, setData] = useState(null);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (app && !disabled) {
            const ref = app.firestore().doc(path);

            if (!isLoading) {
                setIsLoading(true);
            }

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [app, path, flat, disabled]);
    return [data, isLoading];
}
