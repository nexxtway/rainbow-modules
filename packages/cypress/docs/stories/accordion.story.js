import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionSection } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

export const BasicAccordion = () => {
    return (
        <Container>
            <Accordion id="accordion-1">
                <AccordionSection label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </AccordionSection>
                <AccordionSection label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </AccordionSection>
                <AccordionSection label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </AccordionSection>
            </Accordion>
        </Container>
    );
};

export default {
    title: 'Modules/Cypress/Stories/Accordion',
};
