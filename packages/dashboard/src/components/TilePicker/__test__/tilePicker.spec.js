import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import TilePicker from '..';
import Tile from '../../Tile';

describe('<TilePicker />', () => {
    it('should call onChange with string when multiple is false', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <Application>
                <TilePicker onChange={onChangeMock}>
                    <Tile name={name} />
                </TilePicker>
            </Application>,
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
            <Application>
                <TilePicker onChange={onChangeMock} multiple>
                    <Tile name={name} />
                </TilePicker>
            </Application>,
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
            <Application>
                <TilePicker onChange={onChangeMock} multiple>
                    <Tile name={name} />
                </TilePicker>
            </Application>,
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
            <Application>
                <TilePicker value={[]} onChange={onChangeMock} multiple>
                    <Tile name={name} />
                </TilePicker>
            </Application>,
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
            <Application>
                <TilePicker value={[name]} onChange={onChangeMock} multiple>
                    <Tile name={name} />
                </TilePicker>
            </Application>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: false } });
        expect(onChangeMock).toBeCalledWith([]);
    });
});
