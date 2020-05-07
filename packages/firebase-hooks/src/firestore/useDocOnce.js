import { useContext, useEffect, useState } from 'react';
import Context from '../context';

export default function useDocOnce(props) {
    const { path } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (app) {
            const ref = app.firestore().doc(path);
            ref.get()
                .then((doc) => {
                    if (doc.exists) {
                        setData({
                            id: doc.id,
                            data: doc.data(),
                        });
                    } else {
                        setData(null);
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    console.log(err);
                });
        }
    }, [props.path]);

    return [data, isLoading];
}
