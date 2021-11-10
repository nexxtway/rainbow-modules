import React, { useState } from 'react';
import { Tree } from 'react-rainbow-components';

const initialData = [
    { label: 'Tree Item' },
    { label: 'Tree Item' },
    {
        label: 'Tree Branch',
        isExpanded: true,
        children: [
            { label: 'Tree Item' },
            {
                label: 'Tree Branch',
                isLoading: false,
                children: [
                    { label: 'Tree Item' },
                    {
                        label: 'Tree Item',
                        children: [
                            { label: 'Tree Item' },
                            { label: 'Tree Item' },
                            {
                                label: 'Tree Item',
                                children: [
                                    { label: 'Tree Item' },
                                    {
                                        label: 'Tree Item',
                                        children: [{ label: 'Tree Item' }, { label: 'Tree Item' }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: 'Tree Branch',
        children: [
            { label: 'Tree Item' },
            { label: 'Tree Item' },
            { label: 'Tree Item' },
            { label: 'Tree Item' },
            { label: 'Tree Item' },
        ],
    },
];

export const BasicTree = () => {
    const [data, setData] = useState(initialData);
    const [selectedNode, setSelectedNode] = useState('');

    const expandNode = ({ nodePath }) => {
        const newData = [...data];
        const child = Tree.getNode(newData, nodePath);
        child.isExpanded = !child.isExpanded;
        setData(newData);
    };

    return (
        <Tree
            id="tree"
            data={data}
            className="rainbow-m-around_xx-large"
            onNodeExpand={expandNode}
            selectedNode={selectedNode}
            onNodeSelect={({ name }) => {
                setSelectedNode(name);
            }}
            ariaLabel="tree-basic"
        />
    );
};

export default {
    title: 'Modules/Cypress/Stories/Tree',
};
