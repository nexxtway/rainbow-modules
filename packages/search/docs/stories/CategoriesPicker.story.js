import React, { useState } from 'react';
import { Application } from 'react-rainbow-components';
import CategoriesPicker from '../../src/components/CategoriesPicker';

const containerStyle = {
    width: 150,
};

export const BasicCategoriesPicker = () => {
    const [activeCategoryName, setActiveCategoryName] = useState(['Authentication']);
    return (
        <Application>
            <div style={containerStyle}>
                <CategoriesPicker
                    label="Categories"
                    options={['Authentication', 'BigQuery', 'Category 2']}
                    value={activeCategoryName}
                    onChange={setActiveCategoryName}
                    multiple
                />
            </div>
        </Application>
    );
};

export default {
    title: 'Modules/Search/Stories/CategoriesPicker',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
