import React, { createContext } from 'react';

const KeyboardNavigationContext = createContext({});

const KeyboardNavigation = (props) => {
    const { children } = props;
    return (
        <KeyboardNavigationContext.Provider value="dark">
            {children}
        </KeyboardNavigationContext.Provider>
    );
};

KeyboardNavigation.context = KeyboardNavigationContext;

export default KeyboardNavigation;
