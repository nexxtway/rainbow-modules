import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Tile from '..';
import { Provider } from '../../TilePicker/context';
import { StyledContent, StyledValue } from '../styled';

describe('<Tile />', () => {
    it('should render a simple div content when do not have TilePicker context', () => {
        const wrapper = mount(
            <Application>
                <Tile />
            </Application>,
        );
        expect(wrapper.find(StyledContent).exists()).toBe(true);
    });

    it('should render a input when has TilePicker context', () => {
        const wrapper = mount(
            <Application>
                <Provider value={{}}>
                    <Tile />
                </Provider>
            </Application>,
        );
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('should render a input type radio when the context prop multiple is false', () => {
        const context = { multiple: false };
        const wrapper = mount(
            <Application>
                <Provider value={context}>
                    <Tile />
                </Provider>
            </Application>,
        );
        expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
    });

    it('should render a input type checkbox when the prop context multiple is true', () => {
        const context = { multiple: true };
        const wrapper = mount(
            <Application>
                <Provider value={context}>
                    <Tile />
                </Provider>
            </Application>,
        );
        expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    });

    it('should call onChange of the context when input change', () => {
        const onChangeMock = jest.fn();
        const context = { onChange: onChangeMock };
        const name = 'otion-1';
        const wrapper = mount(
            <Application>
                <Provider value={context}>
                    <Tile name={name} />
                </Provider>
            </Application>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeMock).toBeCalledWith(name, true);
    });

    it('should render a component to the background color passed ', () => {
        const backgroundColor = '#000000';
        const wrapper = mount(
            <Application>
                <Tile backgroundColor={backgroundColor} />
            </Application>,
        );
        expect(wrapper.find(StyledContent).first().prop('style')).toStrictEqual({
            backgroundColor,
        });
    });

    it('should render a component to the color passed', () => {
        const color = '#ffffff';
        const wrapper = mount(
            <Application>
                <Tile color={color} />
            </Application>,
        );
        expect(wrapper.find(StyledValue).first().prop('style')).toStrictEqual({ color });
    });
});
