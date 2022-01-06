import React, { 
    useEffect,
    useState,
    useRef,
    useImperativeHandle,
    forwardRef
} from 'react';
import Button from 'react-rainbow-components/components/Button';
import Table from 'react-rainbow-components/components/Table';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import PropTypes from 'prop-types';
import { Container } from './styled';
import getData from './getData';

const FirestoreTableWithCursors = forwardRef((props, ref) => {
    const { children, collection, pageSize, query, ...rest } = props;
    const app = useFirebaseApp();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const unsubscribe = useRef(); 
    const pagesRefs = useRef([]);
    const page = useRef();
    const collectionRef = query(app.firestore().collection(collection));
        
    useEffect(() => {
        (async () => {
            setLoading(true);
            unsubscribe.current = collectionRef
                .limit(pageSize)
                .onSnapshot(
                    (querySnapshot) => {
                        if (querySnapshot.docs.length > 0) {
                            pagesRefs.current.push({ 
                                first: querySnapshot.docs[0],
                                last: querySnapshot.docs[querySnapshot.docs.length - 1],
                            });
                            page.current = 0;
                            setData(getData(querySnapshot.docs));
                        }
                        setLoading(false);
                    },
            );    

        })();
        return () => {
            unsubscribe.current();
        }
    }, []);
    const next = async () => {
            unsubscribe.current();
            setLoading(true);
            unsubscribe.current = collectionRef
                .startAfter(pagesRefs.current[page.current].last)
                .limit(pageSize)
                .onSnapshot(
                    (querySnapshot) => {
                        if (querySnapshot.docs.length > 0) {
                            pagesRefs.current.push({ 
                                first: querySnapshot.docs[0],
                                last: querySnapshot.docs[querySnapshot.docs.length - 1],
                            });
                            page.current += 1;
                            setData(getData(querySnapshot.docs));
                        }
                        setLoading(false);
                    },
            ); 
    }
    const previous = async () => {
        unsubscribe.current();
        setLoading(true);
        unsubscribe.current = collectionRef
            .startAt(pagesRefs.current[page.current - 1].first)
            .limit(pageSize)
            .onSnapshot(
                (querySnapshot) => {
                    if (querySnapshot.docs.length > 0) {
                        pagesRefs.current.unshift();
                        page.current -= 1;
                        setData(getData(querySnapshot.docs));
                    }
                    setLoading(false);
                },
        ); 
    }
    useImperativeHandle(ref, () => ({
        refresh: () => {
            unsubscribe.current();
            setLoading(true);
            unsubscribe.current = collectionRef
                .limit(pageSize)
                .onSnapshot(
                    (querySnapshot) => {
                        if (querySnapshot.docs.length > 0) {
                            pagesRefs.current = [{ 
                                first: querySnapshot.docs[0],
                                last: querySnapshot.docs[querySnapshot.docs.length - 1],
                            }];
                            page.current = 0;
                            setData(getData(querySnapshot.docs));
                        }
                        setLoading(false);
                    },
            ); 
        },
    }));
    return (
        <Container>
            <Table 
                keyField="id" 
                data={data} 
                {...rest}
                isLoading={isLoading}>
                    {children}
            </Table>
            <Button label="previous" onClick={previous} disabled={isLoading || !page.current} />
            <Button label="next" onClick={next} disabled={isLoading} />
        </Container>
    )    
});

FirestoreTableWithCursors.propTypes = {
    /** The path of the Firestore collection e.g. `/books` */
    collection: PropTypes.string.isRequired,
    /** Query function for firestore. */
    query: PropTypes.func,
    /** The page size used for the pagination */
    pageSize: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FirestoreTableWithCursors.defaultProps = {
    query: (ref) => ref,
    children: [],
    pageSize: 20
};

FirestoreTableWithCursors.displayName = 'FirestoreTableWithCursors';
export default FirestoreTableWithCursors;
