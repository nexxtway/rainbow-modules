import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactJson from 'react-json-view'
import RainbowFirebaseApp from '../src/components/App';
import app from './firebase';
import { useCollectionOnce } from 'rainbow-firebase-hooks';
import { Button } from 'react-rainbow-components';
import { useDispatch, useSelector } from 'react-redux';

const Books = () => {
    const [books, isLoading] = useCollectionOnce({ path: 'books' });
    return <ReactJson src={books} />;
}

const stories = storiesOf('RainbowFirebaseApp/with Hooks', module);

stories.add('useCollectionOnce', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Books /> 
        </RainbowFirebaseApp>
    );
});

