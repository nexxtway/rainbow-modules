import React, { useState } from 'react';
import { Accordion, AccordionSection, Application, Tree } from 'react-rainbow-components';
import styled from 'styled-components';
import ResizableColumns from '../../src/components/ResizableColumns';

const treeData = [
    { label: 'Tree Item' },
    { label: 'Tree Item' },
    {
        label: 'Tree Branch',
        isExpanded: true,
        children: [{ label: 'Tree Item' }],
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

const StyledContainer = styled.div`
    height: 90vh;
`;

const StyledTreeContainer = styled.div`
    height: 100%;
`;

const LeftColumn = () => {
    const [data, setData] = useState(treeData);
    const [selectedNode, setSelectedNode] = useState();

    const expandNode = ({ nodePath }) => {
        const child = Tree.getNode(data, nodePath);
        child.isExpanded = !child.isExpanded;
        setData([...data]);
    };

    return (
        <StyledTreeContainer>
            <Tree
                data={data}
                selectedNode={selectedNode}
                onNodeSelect={(node) => setSelectedNode(node.name)}
                onNodeExpand={expandNode}
            />
        </StyledTreeContainer>
    );
};

const RightColumn = () => (
    <div className="rainbow-p-horizontal_large">
        <Accordion>
            <AccordionSection label="Version 1.1.1">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection label="Version 1.1.0">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection label="Version 1.0.1">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection label="Version 1.0.0">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
        </Accordion>
    </div>
);

export const ResizableColumnExample = () => {
    return (
        <Application>
            <StyledContainer>
                <ResizableColumns
                    initialDividerPosition={250}
                    leftColumn={<LeftColumn />}
                    minLeftWidth={{ px: 100 }}
                    rightColumn={<RightColumn />}
                    minRightWidth={{ percent: 25 }}
                />
            </StyledContainer>
        </Application>
    );
};

export default {
    title: 'Modules/Layout/Stories/ResizableColumn',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
