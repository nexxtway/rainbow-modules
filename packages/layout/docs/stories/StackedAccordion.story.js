import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import StackedAccordion from '../../src/components/StackedAccordion';
import StackedAccordionSection from '../../src/components/StackedAccordionSection';

const Container = styled.div`
    height: 350px;
    width: 100%;
`;

export const BasicStackedAccordion = () => {
    return (
        <Application>
            <Container>
                <StackedAccordion activeSectionNames={['section-1']}>
                    <StackedAccordionSection label="Private" name="section-1">
                        <h1>Section 1 content</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </StackedAccordionSection>
                    <StackedAccordionSection label="Public" name="section-2">
                        Section 2 content
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </StackedAccordionSection>
                    <StackedAccordionSection label="Other" name="section-3">
                        Section 3 content
                    </StackedAccordionSection>
                </StackedAccordion>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Layout/Stories/StackedAccordion',
};
