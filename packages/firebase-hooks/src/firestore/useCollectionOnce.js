import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getData from '../helpers/getData';

const defaultData = [];

export default function useCollectionOnce(props) {
    const { path, query, onlyIds = false, flat = false, track = [], disabled = false } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(!disabled);
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        if (app && !disabled) {
            const ref = app.firestore().collection(path);
            const finalQuery = query ? query(ref) : ref;

            if (!isLoading) {
                setIsLoading(true);
            }

            finalQuery
                .get()
                .then((querySnapshot) => {
                    setData(getData(querySnapshot.docs, onlyIds, flat));
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [app, path, onlyIds, flat, disabled].concat(track));

    return [data, isLoading];
}
