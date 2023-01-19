import { useEffect, useState } from 'react';
import doc from '../helpers/doc';
import getDocData from '../helpers/getDocData';
import useFirestore from './useFirestore';
import onSnapshot from '../helpers/onSnapshot';

export default function useDoc(props) {
    const { path, flat = false, disabled = false } = props;
    const firestore = useFirestore();

    const [isLoading, setIsLoading] = useState(!disabled);
    const [data, setData] = useState();

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (firestore && !disabled) {
            const ref = doc(firestore, path);

            if (!isLoading) {
                setIsLoading(true);
            }

            const unsubscribe = onSnapshot(
                ref,
                (doc) => {
                    if (
                        (typeof doc.exists === 'boolean' && doc.exists) ||
                        (typeof doc.exists === 'function' && doc.exists())
                    ) {
                        setData(getDocData(doc, flat));
                    } else {
                        setData(undefined);
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
    }, [firestore, path, flat, disabled]);
    return [data, isLoading];
}
