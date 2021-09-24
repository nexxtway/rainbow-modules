import React from 'react';
import { Application, Table, Column } from 'react-rainbow-components';
import MarkdownColumn from '../../src/components/MarkdownColumn';

const initialData = [
    {
        customer: 'Styles',
        markdown:
            "I just love **&#42;&#42;bold text&#42;&#42;**. \n Italicized text is the *&#42;cat's meow&#42;*.",
        id: '1234asdfgh',
    },
    {
        customer: 'Link',
        markdown:
            'React Rainbow is a collection of components that will reliably help you build your application in a snap. [[Link](http://react-rainbow.io)](http://react-rainbow.io) Give it a hack and let us know what you think.',
        id: '1234zxcvbn',
    },
    {
        customer: 'List',
        markdown:
            '1. First item\n 2. Second item\n 3. Third item\n     1. First item\n     2. Second item\n 4. Fourth item',
        id: '5678asdfgh',
    },
];

export const BasicMarkdownColumn = () => {
    return (
        <Application>
            <Table data={initialData} keyField="id" variant="listview">
                <Column header="Object" field="customer" />
                <Column header="Example" field="markdown" component={MarkdownColumn} />
            </Table>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/MarkdownColumn',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
