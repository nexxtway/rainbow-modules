import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Trailing from '../trailing';
import { StyledTrailingMessage, Divider } from '../styled';

describe('<Trailing />', () => {
    it('should show a clear button when input is not empty', () => {
        const component = mount(
            <Application>
                <Trailing value="test" />
            </Application>,
        );
        expect(component.find('button').exists()).toBe(true);
    });

    it('should not show a clear button when input is empty', () => {
        const component = mount(
            <Application>
                <Trailing value="" />
            </Application>,
        );
        expect(component.find('button').exists()).toBe(false);
    });

    it('should show the trailing message when variant is "default"', () => {
        const component = mount(
            <Application>
                <Trailing variant="default" />
            </Application>,
        );
        expect(component.find(StyledTrailingMessage).exists()).toBe(true);
    });

    it('should not show the trailing message when variant is "realtime"', () => {
        const component = mount(
            <Application>
                <Trailing variant="realtime" />
            </Application>,
        );
        expect(component.find(StyledTrailingMessage).exists()).toBe(false);
    });

    it('should show the divider', () => {
        const component = mount(
            <Application>
                <Trailing value="test" variant="default" />
            </Application>,
        );
        expect(component.find(Divider).exists()).toBe(true);
    });

    it('should not show the divider', () => {
        const component = mount(
            <Application>
                <Trailing value="" />
            </Application>,
        );
        expect(component.find(Divider).exists()).toBe(false);
    });
});
