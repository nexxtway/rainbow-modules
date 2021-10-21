import React from 'react';
import { mount } from 'enzyme';
import IframeModal from '..';

describe('<IframeModal />', () => {
    it('should render an iframe with the passed `src`', () => {
        const component = mount(<IframeModal src="test.html" isOpen />);
        expect(component.find('iframe').prop('src')).toBe('test.html');
    });

    it('should not render when isOpen is false', () => {
        const component = mount(<IframeModal src="test.html" isOpen={false} />);
        expect(component.find('iframe').exists()).toBe(false);
    });

    it('should pass the title to the iframe', () => {
        const component = mount(<IframeModal src="test.html" title="Test title" isOpen />);
        expect(component.find('iframe').prop('title')).toBe('Test title');
    });

    it('should call onRequestClose callback', () => {
        const closeFn = jest.fn();
        const component = mount(<IframeModal src="test.html" onRequestClose={closeFn} isOpen />);
        component.find('#modal-close-button').first().simulate('click');
        expect(closeFn).toHaveBeenCalled();
    });
});
