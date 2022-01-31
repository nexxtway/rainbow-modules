/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { ContextType } from './types';

const context = React.createContext<ContextType>({
    filters: {
        labels: {},
    },
    labels: [],
    updateFilters: () => {},
});

export const { Consumer, Provider } = context;
export default context;
