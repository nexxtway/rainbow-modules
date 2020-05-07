import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-rainbow-components';
import { useDispatch, useSelector } from 'react-redux';
import app from '../../../firebase';
import RainbowFirebaseApp from '../src/components/App';

const stories = storiesOf('RainbowFirebaseApp/with Redux', module);

stories.add('increase a counter', () => {
    const init = { count: 0 };
    const counterReducer = (state = init, action) => {
        switch (action.type) {
            case 'INCREASE':
                return {
                    count: state.count + 1,
                };
            default:
                return state;
        }
    };
    const reducers = { counterReducer };
    const Content = () => {
        const dispatch = useDispatch();
        const count = useSelector((state) => state.counterReducer.count);
        return (
            <div>
                <Button label="Increase counter!" onClick={() => dispatch({ type: 'INCREASE' })} />
                <h1>
                    Count:
                    {count}
                </h1>
            </div>
        );
    };

    return (
        <RainbowFirebaseApp app={app} reducers={reducers}>
            <Content />
        </RainbowFirebaseApp>
    );
});
