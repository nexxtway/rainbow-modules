import React from 'react';
import { mount } from 'enzyme';
import TilePicker from '..';
import Tile from '../../Tile';

describe('<TilePicker />', () => {
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

    it('should call onChange with string when multiple is false', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
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

    it('should call onChange with array when multiple is true and checked is true', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <TilePicker onChange={onChangeMock} multiple>
                <Tile name={name} />
            </TilePicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeMock).toBeCalledWith([name]);
    });

    it('should call onChange with empty array when multiple is true and checked is false', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <TilePicker onChange={onChangeMock} multiple>
                <Tile name={name} />
            </TilePicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: false } });
        expect(onChangeMock).toBeCalledWith([]);
    });

    it('should call onChange with array when multiple is true and value is array', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <TilePicker value={[]} onChange={onChangeMock} multiple>
                <Tile name={name} />
            </TilePicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeMock).toBeCalledWith([name]);
    });

    it('should call onChange with empty array when multiple is true and checked is false', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <TilePicker value={[name]} onChange={onChangeMock} multiple>
                <Tile name={name} />
            </TilePicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: false } });
        expect(onChangeMock).toBeCalledWith([]);
    });

    it('should render a carousel when the options are overflow', () => {
        const wrapper = mount(
            <TilePicker>
                <Tile name="option-1" />
                <Tile name="option-2" />
                <Tile name="option-3" />
            </TilePicker>,
        );

        expect(wrapper.find('ButtonIcon').length).toBe(2);
    });
});
