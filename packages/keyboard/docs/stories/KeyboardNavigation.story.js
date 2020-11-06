import React from 'react';
import KeyboardNavigation from '../../src/components/KeyboardNavigation';

const Option = (props) => {
    const { name } = props;
    return <li>{name}</li>;
};

export const BasicKeyboardNavigation = () => {
    return (
        <KeyboardNavigation>
            <ul>
                <Option name="Option 1" />
                <Option name="Option 1" />
                <Option name="Option 1" />
            </ul>
        </KeyboardNavigation>
    );
};

export default {
    title: 'Modules|Keyboard/Stories/KeyboardNavigation',
};
