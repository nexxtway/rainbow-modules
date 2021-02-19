import { mount } from 'enzyme';
import React from 'react';
import { Application } from 'react-rainbow-components';
import { BrowserRouter } from 'react-router-dom';
import Value from '../value';

describe('<Value />', () => {
    it('should render a Link when type is url', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Application>
                    <Value type="url" href="/" />
                </Application>
            </BrowserRouter>,
        );
        expect(wrapper.find('Link').exists()).toBe(true);
    });

    it('should render an anchor element when type is url and target is `_blank`', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Application>
                    <Value type="url" target="_blank" href="/" />
                </Application>
            </BrowserRouter>,
        );
        expect(wrapper.find('a').exists()).toBe(true);
    });

    it('should render component when passed', () => {
        const Component = () => <p>Test</p>;
        const wrapper = mount(
            <Application>
                <Value component={Component} />
            </Application>,
        );
        expect(wrapper.find(Component).exists()).toBe(true);
    });

    it('should render component when passed and type is url', () => {
        const Component = () => <p>Test</p>;
        const wrapper = mount(
            <BrowserRouter>
                <Application>
                    <Value type="url" component={Component} />
                </Application>
            </BrowserRouter>,
        );
        expect(wrapper.find(Component).exists()).toBe(true);
    });

    it('should render the formatted value when no component is passed', () => {
        const wrapper = mount(
            <Application>
                <Value type="number" value={50.1} />
            </Application>,
        );
        expect(wrapper.find(Value).text()).toBe('50.1');
    });
});
