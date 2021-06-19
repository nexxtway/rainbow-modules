import React, { useState } from 'react';
import styled from 'styled-components';
import { Application, Tree, Card, Accordion, AccordionSection } from 'react-rainbow-components';
import StackedAccordion from '../../src/components/StackedAccordion';
import StackedAccordionSection from '../../src/components/StackedAccordionSection';

const treeData = [
    {
        label: 'sendWelcomeEmail',
        isExpanded: true,
        children: [{ label: 'Versions' }, { label: 'Overview' }],
    },
    { label: 'sendTransactionalEmail' },
    { label: 'sendWelcomeEmail' },
    {
        label: 'sendWelcomeEmail',
        isExpanded: true,
        children: [{ label: 'Versions' }, { label: 'Overview' }],
    },
    { label: 'sendTransactionalEmail' },
    { label: 'sendWelcomeEmail' },
    {
        label: 'sendTransactionalEmail',
        isExpanded: true,
        children: [{ label: 'Versions' }, { label: 'Overview' }],
    },
];

const Container = styled.div`
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const BasicStackedAccordion = () => {
    const [data, setData] = useState(treeData);
    const [selectedNode, setSelectedNode] = useState();

    const expandNode = ({ nodePath }) => {
        const child = Tree.getNode(data, nodePath);
        child.isExpanded = !child.isExpanded;
        setData([...data]);
    };

    return (
        <Application>
            <Container>
                <StackedAccordion activeSectionNames={['section-1']} style={{ flex: 1 }}>
                    <StackedAccordionSection label="Private" name="section-1">
                        <Tree
                            data={data}
                            selectedNode={selectedNode}
                            onNodeSelect={(node) => setSelectedNode(node.name)}
                            onNodeExpand={expandNode}
                        />
                    </StackedAccordionSection>
                    <StackedAccordionSection label="Public" name="section-2">
                        <Tree
                            data={data}
                            selectedNode={selectedNode}
                            onNodeSelect={(node) => setSelectedNode(node.name)}
                            onNodeExpand={expandNode}
                        />
                    </StackedAccordionSection>
                    <StackedAccordionSection label="Other" name="section-3">
                        <Tree
                            data={data}
                            selectedNode={selectedNode}
                            onNodeSelect={(node) => setSelectedNode(node.name)}
                            onNodeExpand={expandNode}
                        />
                    </StackedAccordionSection>
                </StackedAccordion>
                <Card
                    className="rainbow-p-horizontal_large rainbow-p-vertical_large"
                    style={{ flex: 3 }}
                    title="Version history"
                >
                    <Accordion>
                        <AccordionSection label="Version 1.1.0">
                            A rainbow is a meteorological phenomenon that is caused by reflection,
                            refraction and dispersion of light in water droplets resulting in a
                            spectrum of light appearing in the sky.
                        </AccordionSection>
                        <AccordionSection label="Version 1.0.1">
                            A rainbow is a meteorological phenomenon that is caused by reflection,
                            refraction and dispersion of light in water droplets resulting in a
                            spectrum of light appearing in the sky.
                        </AccordionSection>
                        <AccordionSection label="Version 1.0.0">
                            A rainbow is a meteorological phenomenon that is caused by reflection,
                            refraction and dispersion of light in water droplets resulting in a
                            spectrum of light appearing in the sky.
                        </AccordionSection>
                    </Accordion>
                </Card>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Layout/Stories/StackedAccordion',
};
