import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, ArrowLeft } from '@rainbow-modules/icons';
import { RenderIf, ButtonIcon } from 'react-rainbow-components';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import { Container, Footer, StyledTable } from './styled';
import getData from './getData';
import getCollection from './helpers/getCollection';

const FirestoreTableWithCursors = forwardRef((props, ref) => {
    const {
        children,
        collection,
        pageSize,
        query,
        style,
        className,
        isCollectionGroup,
        ...rest
    } = props;
    const app = useFirebaseApp();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const tableRef = useRef();
    const unsubscribe = useRef();
    const pagesRefs = useRef([]);
    const page = useRef();
    const collectionRef = query(getCollection(app, collection, isCollectionGroup));

    useEffect(() => {
        (async () => {
            setLoading(true);
            unsubscribe.current = collectionRef.limit(pageSize).onSnapshot(
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
                (err) => {
                    setLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(err);
                },
            );
        })();
        return () => {
            unsubscribe.current();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const next = async () => {
        unsubscribe.current();
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
                        tableRef.current.scrollTop();
                    }
                },
                (err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                },
            );
    };
    const previous = async () => {
        unsubscribe.current();
        unsubscribe.current = collectionRef
            .startAt(pagesRefs.current[page.current - 1].first)
            .limit(pageSize)
            .onSnapshot(
                (querySnapshot) => {
                    if (querySnapshot.docs.length > 0) {
                        pagesRefs.current.unshift();
                        page.current -= 1;
                        setData(getData(querySnapshot.docs));
                        tableRef.current.scrollTop();
                    }
                },
                (err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                },
            );
    };
    useImperativeHandle(ref, () => ({
        refresh: () => {
            unsubscribe.current();
            setData([]);
            setLoading(true);
            pagesRefs.current = [];
            unsubscribe.current = collectionRef.limit(pageSize).onSnapshot(
                (querySnapshot) => {
                    if (querySnapshot.docs.length > 0) {
                        pagesRefs.current = [
                            {
                                first: querySnapshot.docs[0],
                                last: querySnapshot.docs[querySnapshot.docs.length - 1],
                            },
                        ];
                        page.current = 0;
                        setData(getData(querySnapshot.docs));
                    }
                    setLoading(false);
                },
                (err) => {
                    setLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(err);
                },
            );
        },
    }));

    const isNotEmpty = data && data.length > 0;

    return (
        <Container style={style} className={className}>
            <StyledTable keyField="id" data={data} {...rest} isLoading={isLoading} ref={tableRef}>
                {children}
            </StyledTable>
            <RenderIf isTrue={isNotEmpty}>
                <Footer>
                    <ButtonIcon
                        title="previous"
                        icon={<ArrowLeft />}
                        onClick={previous}
                        disabled={isLoading || !page.current}
                        variant="border-filled"
                        className="rainbow-m-horizontal_small"
                    />
                    <ButtonIcon
                        title="next"
                        icon={<ArrowRight />}
                        onClick={next}
                        disabled={isLoading}
                        variant="border-filled"
                    />
                </Footer>
            </RenderIf>
        </Container>
    );
});

FirestoreTableWithCursors.propTypes = {
    /** The path of the Firestore collection e.g. `/books` */
    collection: PropTypes.string.isRequired,
    /** Query function for firestore. */
    query: PropTypes.func,
    /** The page size used for the pagination */
    pageSize: PropTypes.number,
    /** It will fetch the data using a collection group query */
    isCollectionGroup: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FirestoreTableWithCursors.defaultProps = {
    query: (ref) => ref,
    pageSize: 20,
    isCollectionGroup: false,
    className: undefined,
    style: undefined,
    children: [],
};

FirestoreTableWithCursors.displayName = 'FirestoreTableWithCursors';
export default FirestoreTableWithCursors;
