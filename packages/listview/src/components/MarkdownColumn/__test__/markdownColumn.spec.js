import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import MarkdownColumn from '../index';

describe('<MarkdownColumn />', () => {
    it('should render a MarkdownOutput with the value passed', () => {
        const component = mount(
            <Application>
                <MarkdownColumn value="test" />
            </Application>,
        );
        const output = component.find('MarkdownOutput');
        expect(output.exists()).toBe(true);
        expect(output.prop('value')).toBe('test');
    });
});
