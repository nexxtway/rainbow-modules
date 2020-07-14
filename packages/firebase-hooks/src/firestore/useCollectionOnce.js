import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getData from '../helpers/getData';

const defaultData = [];

export default function useCollectionOnce(props) {
    const { path, query, onlyIds = false, flat = false } = props;
    const { app } = useContext(Context);

    const [data, setData] = useState(defaultData);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (app) {
            const ref = app.firestore().collection(path);
            const finalQuery = query ? query(ref) : ref;

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
    }, [path, onlyIds, flat, app, query]);

    return [data, isLoading];
}
