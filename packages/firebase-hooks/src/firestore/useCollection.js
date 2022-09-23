import { useEffect, useState } from 'react';
import collection from '../helpers/collection';
import getData from '../helpers/getData';
import onSnapshot from '../helpers/onSnapshot';
import query from '../helpers/query';
import useFirestore from './useFirestore';

const defaultData = [];

export default function useCollection(props) {
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

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (firestore && !disabled) {
            const ref = collection(firestore, path);
            const finalQuery = queryInProps ? queryInProps(ref) : query(ref);

            if (!isLoading) {
                setIsLoading(true);
            }

            const unsubscribe = onSnapshot(
                finalQuery,
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
    }, [firestore, path, onlyIds, flat, disabled].concat(track));

    return [data, isLoading];
}
