import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getDocData from '../helpers/getDocData';

export default function useDocOnce(props) {
    const { path, flat = false } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (app) {
            const ref = app.firestore().doc(path);
            ref.get()
                .then((doc) => {
                    if (doc.exists) {
                        setData(getDocData(doc, flat));
                    } else {
                        setData(null);
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        }
    }, [app, path, flat]);

    return [data, isLoading];
}
