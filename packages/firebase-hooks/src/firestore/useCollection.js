import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getData from '../helpers/getData';

const defaultData = [];

export default function useCollection(props) {
    const { path, query, onlyIds = false, flat = false, track = [], disabled = false } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(!disabled);
    const [data, setData] = useState(defaultData);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (app && !disabled) {
            const ref = app.firestore().collection(path);
            const finalQuery = query ? query(ref) : ref;

            if (!isLoading) {
                setIsLoading(true);
            }

            const unsubscribe = finalQuery.onSnapshot(
                (querySnapshot) => {
                    setData(getData(querySnapshot.docs, onlyIds, flat));
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
    }, [app, path, onlyIds, flat, disabled].concat(track));

    return [data, isLoading];
}
