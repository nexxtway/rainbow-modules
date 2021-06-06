import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Step from '..';

describe('<Step />', () => {
    it('should render the number passed', () => {
        const number = <p data-test>1</p>;
        const component = mount(
            <Application>
                <Step number={number} />
            </Application>,
        );
        expect(component.find('[data-test=true]').exists()).toBe(true);
    });

    it('should render the title passed', () => {
        const header = <p data-test>Header</p>;
        const component = mount(
            <Application>
                <Step header={header} />
            </Application>,
        );
        expect(component.find('[data-test=true]').exists()).toBe(true);
    });

    it('should render the description passed', () => {
        const desc = <p data-test>Description</p>;
        const component = mount(
            <Application>
                <Step description={desc} />
            </Application>,
        );
        expect(component.find('[data-test=true]').exists()).toBe(true);
    });

    it('should render the children passed', () => {
        const children = <p data-test>Children</p>;
        const component = mount(
            <Application>
                <Step>{children}</Step>
            </Application>,
        );
        expect(component.find('[data-test=true]').exists()).toBe(true);
    });
});
