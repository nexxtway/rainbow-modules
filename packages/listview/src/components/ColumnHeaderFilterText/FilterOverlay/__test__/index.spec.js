import React from 'react';
import { mount } from 'enzyme';
import { Application, Button } from 'react-rainbow-components';
import manageTab from '../manageTab';
import FilterOverlay from '..';
import { StyledTitle, StyledContainer } from '../styled';

jest.mock('../manageTab', () => jest.fn());

jest.useFakeTimers();

describe('FilterOverlay', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                },
            ];
        });
    });
    it('should render a header text', () => {
        const wrapper = mount(
            <Application>
                <FilterOverlay triggerElementRef={() => {}} headerText="Name" isOpen />
            </Application>,
        );
        jest.runAllTimers();
        expect(wrapper.find(StyledTitle).text()).toBe('Filter by "Name"');
    });
    it('should call onOpened when opened', () => {
        const onOpenedFn = jest.fn();
        mount(
            <Application>
                <FilterOverlay triggerElementRef={() => {}} onOpened={onOpenedFn} isOpen />
            </Application>,
        );
        expect(onOpenedFn).toHaveBeenCalledTimes(1);
    });
    it('should call onRequestClose when ESC key is pressed', () => {
        const onRequestCloseFn = jest.fn();
        const wrapper = mount(
            <Application>
                <FilterOverlay
                    triggerElementRef={() => {}}
                    isOpen
                    onRequestClose={onRequestCloseFn}
                />
            </Application>,
        );
        wrapper.find(StyledContainer).simulate('keydown', { key: 'Escape' });
        expect(onRequestCloseFn).toHaveBeenCalledTimes(1);
    });
    it('should call onRequestClear when click in clear all button', () => {
        const onRequestClearFn = jest.fn();
        const wrapper = mount(
            <Application>
                <FilterOverlay
                    triggerElementRef={() => {}}
                    isOpen
                    onRequestClear={onRequestClearFn}
                />
            </Application>,
        );
        wrapper.find(Button).simulate('click');
        expect(onRequestClearFn).toHaveBeenCalledTimes(1);
    });
    it('should call manageTab when Tap key is pressed', () => {
        const wrapper = mount(
            <Application>
                <FilterOverlay triggerElementRef={() => {}} isOpen />
            </Application>,
        );
        wrapper.find(StyledContainer).simulate('keydown', { key: 'Tab' });
        expect(manageTab).toHaveBeenCalledTimes(1);
    });
});
