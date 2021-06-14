/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Context } from './types';

const context = React.createContext<Context>({
    activeSectionNames: [],
    sections: [],
    onClick: () => {},
    registerSection: () => {},
    unregisterSection: () => {},
});
export const { Provider, Consumer } = context;
export default context;
