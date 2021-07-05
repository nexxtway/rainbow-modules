import React from 'react';
import { mount } from 'enzyme';
import SourceFilePreview from '../sourceFilePreview';
import Loader from '../loader';
import Message from '../message';

describe('<SourceFilePreview />', () => {
    it('should render a Loader when isLoading is true', () => {
        const component = mount(<SourceFilePreview isLoading />);
        expect(component.find(Loader).exists()).toBe(true);
    });

    it('should render nothing when there is no content', () => {
        const component = mount(<SourceFilePreview />);
        expect(component.html()).toBeNull();
    });

    it('should render a message when content is not a string', () => {
        const component = mount(<SourceFilePreview content />);
        expect(component.find(Message).exists()).toBe(true);
    });

    it('should render a syntax highlighter when content is valid', () => {
        const component = mount(<SourceFilePreview content="const test = true;" />);
        expect(component.find('SyntaxHighlighter').exists()).toBe(true);
    });
});
