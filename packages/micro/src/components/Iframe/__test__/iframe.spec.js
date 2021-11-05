import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Iframe from '..';
import { StyledSpinner } from '../styled';

describe('<Iframe />', () => {
    it('should render an iframe with the passed `src`', () => {
        const component = mount(
            <Application>
                <Iframe src="test.html" variant="fullPage" isOpen />
            </Application>,
        );
        expect(component.find('iframe').prop('src')).toBe('test.html');
    });

    it('should not render when isOpen is false', () => {
        const component = mount(
            <Application>
                <Iframe src="test.html" variant="fullPage" isOpen={false} />
            </Application>,
        );
        expect(component.find('iframe').exists()).toBe(false);
    });

    it('should pass the title to the iframe', () => {
        const component = mount(
            <Application>
                <Iframe src="test.html" title="Test title" variant="fullPage" isOpen />
            </Application>,
        );
        expect(component.find('iframe').prop('title')).toBe('Test title');
    });

    it('should call onRequestClose callback', () => {
        const closeFn = jest.fn();
        const component = mount(
            <Application>
                <Iframe src="test.html" onRequestClose={closeFn} isOpen />
            </Application>,
        );
        component.find('#modal-close-button').first().simulate('click');
        expect(closeFn).toHaveBeenCalled();
    });

    it('should render a spinner while loading', () => {
        const component = mount(
            <Application>
                <Iframe src="test.html" isOpen />
            </Application>,
        );
        expect(component.find(StyledSpinner).exists()).toBe(true);
        const iframe = component.find('iframe').first();
        iframe.simulate('load');
        expect(component.find(StyledSpinner).exists()).toBe(false);
    });
});
