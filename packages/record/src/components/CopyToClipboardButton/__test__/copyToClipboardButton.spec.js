import React from 'react';
import { mount } from 'enzyme';
import InternalTooltip from 'react-rainbow-components/components/InternalTooltip';
import CopyToClipboardButton from '../index';
import copy from '../helpers/copy';

jest.mock('../helpers/isSupported', () => jest.fn(() => true).mockImplementationOnce(() => false));
jest.mock('../helpers/copy', () => jest.fn(() => true).mockImplementationOnce(() => false));
jest.mock('react-rainbow-components/components/InternalTooltip', () =>
    jest.fn(({ children, ...props }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props}>{children}</div>
    )),
);

describe('<CopyToClipboardButton/>', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should return null when is no supported', () => {
        const wrapper = mount(<CopyToClipboardButton value="" />);
        expect(wrapper.text()).toBe('');
    });
    it('should call copy with value when clicked in button', () => {
        const wrapper = mount(<CopyToClipboardButton value="test" />);
        wrapper.find('button').simulate('click');
        expect(copy).toBeCalledWith('test');
    });
    it('should show tooltip when button is focused and hiddden when is not', () => {
        const wrapper = mount(<CopyToClipboardButton value="test" />);
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeFalsy();
        wrapper.find('button').simulate('focus');
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeTruthy();
        wrapper.find('button').simulate('blur');
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeFalsy();
    });
    it('should show tooltip when mouse enter to button and hidden when leave', () => {
        const wrapper = mount(<CopyToClipboardButton value="test" />);
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeFalsy();
        wrapper.find('button').simulate('mouseenter');
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeTruthy();
        wrapper.find('button').simulate('mouseleave');
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeFalsy();
    });
    it('should show tooltip with copied text when clicked in the button and hidden when run setTimeout', () => {
        jest.useFakeTimers();
        const wrapper = mount(<CopyToClipboardButton value="test" />);
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeFalsy();
        wrapper.find('button').simulate('mouseenter');
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeTruthy();
        expect(wrapper.find(InternalTooltip).text()).toBe('Click to copy');
        wrapper.find('button').simulate('click');
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeTruthy();
        expect(wrapper.find(InternalTooltip).text()).toBe('Copied');
        jest.advanceTimersByTime(3000);
        wrapper.update();
        expect(wrapper.find(InternalTooltip).prop('isVisible')).toBeFalsy();
        jest.useRealTimers();
    });
});
