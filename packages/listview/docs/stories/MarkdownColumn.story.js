import React from 'react';
import { Application, Table, Column } from 'react-rainbow-components';
import MarkdownColumn from '../../src/components/MarkdownColumn';

const initialData = [
    {
        customer: 'Headings',
        markdown:
            '# # Heading level 1\n ## ## Heading level 2\n ### ### Heading level 3\n #### #### Heading level 4\n ##### ##### Heading level 5\n ###### ###### Heading level 6',
        id: '1234qwerty',
    },
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
    {
        customer: 'Code',
        markdown:
            "# Code examples\n ### Standard \n```\nconst data = 'Lorem ipsum....';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Javascript \n```js\nconst data = 'Lorem ipsum....';\n\nconst doSomething = (param) => {\n};\n\nconst xx = doSomething(data);\n```\n\n ### Shell \n```sh\n$ node index.js;\n```\n\n ### Java \n ```java\n String foo = 5;\n```",
        id: '5278aswegh',
    },
];

export const BasicMarkdownColumn = () => {
    return (
        <Application>
            <Table data={initialData} keyField="id" variant="listview">
                <Column header="Customer" field="customer" />
                <Column header="Status" field="markdown" component={MarkdownColumn} />
            </Table>
        </Application>
    );
};

export default {
    title: 'Modules/Listview/Stories/MarkdownColumn',
};
