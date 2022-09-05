import { useEffect, useState } from 'react';
import getDoc from '../helpers/getDoc';
import getDocData from '../helpers/getDocData';
import doc from '../helpers/doc';
import useFirestore from './useFirestore';

export default function useDocOnce(props) {
    const { path, flat = false, disabled = false } = props;
    const firestore = useFirestore();

    const [isLoading, setIsLoading] = useState(!disabled);
    const [data, setData] = useState();

    useEffect(() => {
        if (firestore && !disabled) {
            const ref = doc(firestore, path);

            if (!isLoading) {
                setIsLoading(true);
            }

            getDoc(ref)
                .then((doc) => {
                    if (doc.exists || (typeof doc.exists === 'function' && doc.exists())) {
                        setData(getDocData(doc, flat));
                    } else {
                        setData(undefined);
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firestore, path, flat, disabled]);

    return [data, isLoading];
}
