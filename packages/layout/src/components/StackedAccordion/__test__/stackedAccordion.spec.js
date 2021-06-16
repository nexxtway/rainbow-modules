import React, { useContext } from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import StackedAccordion from '..';
import context from '../context';
import StackedAccordionSection from '../../StackedAccordionSection';

jest.useFakeTimers();

const TestComponent = () => {
    const ctx = useContext(context);
    return <p context={ctx} />;
};

describe('<StackedAccordion />', () => {
    it('should render the correct children', () => {
        const component = mount(
            <Application>
                <StackedAccordion>
                    <StackedAccordionSection />
                    <StackedAccordionSection />
                </StackedAccordion>
            </Application>,
        );
        expect(component.find(StackedAccordionSection).length).toBe(2);
    });

    it('should update the context with the sections', () => {
        const component = mount(
            <Application>
                <StackedAccordion>
                    <StackedAccordionSection />
                    <StackedAccordionSection />
                    <TestComponent />
                </StackedAccordion>
            </Application>,
        );
        const testComponent = component.find(TestComponent).find('p');
        expect(testComponent.prop('context').sections.length).toBe(2);
    });

    it('should add the section to the active sections', () => {
        const component = mount(
            <Application>
                <StackedAccordion>
                    <StackedAccordionSection name="test" />
                    <StackedAccordionSection />
                    <TestComponent />
                </StackedAccordion>
            </Application>,
        );
        component.find(StackedAccordionSection).at(0).find('button').simulate('click');
        const testComponent = component.find(TestComponent).find('p');
        expect(testComponent.prop('context').activeSectionNames.length).toBe(1);
        expect(testComponent.prop('context').activeSectionNames[0]).toBe('test');
    });

    it('should should remove the section from the active sections', () => {
        const component = mount(
            <Application>
                <StackedAccordion activeSectionNames={['test']}>
                    <StackedAccordionSection name="test" />
                    <StackedAccordionSection />
                    <TestComponent />
                </StackedAccordion>
            </Application>,
        );
        component.find(StackedAccordionSection).at(0).find('button').simulate('click');
        const testComponent = component.find(TestComponent).find('p');
        expect(testComponent.prop('context').activeSectionNames.length).toBe(0);
    });
});
