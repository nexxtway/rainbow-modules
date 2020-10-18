import React from 'react';
import { mount } from 'enzyme';
import Tile from '..';
import TilePicker from '../../TilePicker';
import { StyledContent, StyledValue } from '../styled';

describe('<Tile />', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 500,
                    x: 0,
                    y: 0,
                },
            ];
        });
    });

    it('should render a simple div content when do not have TilePicker context', () => {
        const wrapper = mount(<Tile />);
        expect(wrapper.find(StyledContent).exists()).toBe(true);
    });

    it('should render a input when has TilePicker context', () => {
        const wrapper = mount(
            <TilePicker>
                <Tile />
            </TilePicker>,
        );
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('should render a input type radio when the context prop multiple is false', () => {
        const wrapper = mount(
            <TilePicker multiple={false}>
                <Tile />
            </TilePicker>,
        );
        expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
    });

    it('should render a input type checkbox when the prop context multiple is true', () => {
        const wrapper = mount(
            <TilePicker multiple>
                <Tile />
            </TilePicker>,
        );
        expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    });

    it('should call onChange of the context when input change', () => {
        const onChangeMock = jest.fn();
        const name = 'otion-1';
        const wrapper = mount(
            <TilePicker onChange={onChangeMock}>
                <Tile name={name} />
            </TilePicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeMock).toBeCalledWith(name);
    });

    it('should render a component to the background color passed ', () => {
        const backgroundColor = '#000000';
        const wrapper = mount(<Tile backgroundColor={backgroundColor} />);
        expect(wrapper.find(StyledContent).first().prop('style')).toStrictEqual({
            backgroundColor,
        });
    });

    it('should render a component to the color passed', () => {
        const color = '#ffffff';
        const wrapper = mount(<Tile color={color} />);
        expect(wrapper.find(StyledValue).first().prop('style')).toStrictEqual({ color });
    });
});
