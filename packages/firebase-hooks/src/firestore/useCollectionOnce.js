import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import getData from '../helpers/getData';

const defaultData = [];

export default function useCollectionOnce(props) {
    const { path, query, onlyIds = false } = props;
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
                    setData(getData(querySnapshot.docs, onlyIds));
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.path, props.onlyIds]);

    return [data, isLoading];
}
