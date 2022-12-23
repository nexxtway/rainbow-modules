import { useEffect, useState } from 'react';
import collection from '../helpers/collection';
import getData from '../helpers/getData';
import useFirestore from './useFirestore';
import query from '../helpers/query';
import getDocs from '../helpers/getDocs';

const defaultData = [];

export default function useCollectionOnce(props) {
    const {
        path,
        query: queryInProps,
        onlyIds = false,
        flat = false,
        track = [],
        disabled = false,
    } = props;
    const firestore = useFirestore();

    const [isLoading, setIsLoading] = useState(!disabled);
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        if (firestore && !disabled) {
            const ref = collection(firestore, path);
            const finalQuery = queryInProps ? queryInProps(ref) : query(ref);

            if (!isLoading) {
                setIsLoading(true);
            }

            getDocs(finalQuery)
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
    }, [firestore, path, onlyIds, flat, disabled].concat(track));

    return [data, isLoading];
}
