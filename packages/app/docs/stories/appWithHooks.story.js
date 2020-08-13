import React from 'react';
import ReactJson from 'react-json-view';
import { useCollectionOnce } from '@rainbow-modules/firebase-hooks';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';

const Books = () => {
    const [books] = useCollectionOnce({ path: 'books' });
    return <ReactJson src={books} />;
};

export const appFirebaseHooks = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Books />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|App/Stories',
    component: RainbowFirebaseApp,
};
