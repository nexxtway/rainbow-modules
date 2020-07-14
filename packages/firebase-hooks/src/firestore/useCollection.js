import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getData from '../helpers/getData';

const defaultData = [];

export default function useCollection(props) {
    const { path, query, onlyIds = false, flat = false } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        if (app) {
            const ref = app.firestore().collection(path);
            const finalQuery = query ? query(ref) : ref;

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
        return null;
    }, [app, path, query, onlyIds, flat]);

    return [data, isLoading];
}
