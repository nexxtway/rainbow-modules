import React from 'react';
import { storiesOf } from '@storybook/react';
import { Switch, Route, Link } from 'react-router-dom';
import app from '../../../firebase';
import RainbowFirebaseApp from '../src/components/App';

const stories = storiesOf('RainbowFirebaseApp/with Router', module);

stories.add('basic router', () => {
    return (
        <RainbowFirebaseApp app={app}>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        Home page
                    </Route>
                    <Route path="/about">About page</Route>
                    <Route path="/dashboard">Dashboard</Route>
                </Switch>
            </div>
        </RainbowFirebaseApp>
    );
});
