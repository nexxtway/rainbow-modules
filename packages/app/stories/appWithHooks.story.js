import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactJson from 'react-json-view';
import { useCollectionOnce } from 'rainbow-firebase-hooks';
import app from '../../../firebase';
import RainbowFirebaseApp from '../src/components/App';

const Books = () => {
    const [books] = useCollectionOnce({ path: 'books' });
    return <ReactJson src={books} />;
};

const stories = storiesOf('RainbowFirebaseApp/with Hooks', module);

stories.add('useCollectionOnce', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Books />
        </RainbowFirebaseApp>
    );
});
