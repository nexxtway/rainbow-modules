import React from 'react';
import { filterByFields } from '../../src';

export const FilterByFieldsExample = () => {
    filterByFields({
        data: [
            {
                label: 'some string',
                obj: {
                    foo: {
                        bar: 'other string',
                    },
                },
            },
        ],
        query: 'string',
        fields: ['label', 'obj.foo.bar'],
    });

    return <div>hello andy</div>;
};

export default {
    title: 'Modules/Listview/Stories',
};
