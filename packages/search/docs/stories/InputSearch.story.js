import React, { useState } from 'react';
import { Application } from 'react-rainbow-components';
import InputSearch from '../../src/components/InputSearch';

export const BasicInputSearch = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <InputSearch value={value} onChange={setValue} variant="default" />
        </Application>
    );
};

export default {
    title: 'Modules/Search/Stories/InputSearch',
};
