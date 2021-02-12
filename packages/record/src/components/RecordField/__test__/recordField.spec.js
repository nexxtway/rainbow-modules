import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import { BrowserRouter } from 'react-router-dom';
import RecordField from '..';
import Value from '../value';
import { Container } from '../styled';

describe('<RecordField />', () => {
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

    it('should render empty when type is dateTime and value is not datetime', () => {
        const values = ['', 'test', [], {}, undefined, null];
        values.forEach((value) => {
            const wrapper = mount(
                <Application>
                    <RecordField type="dateTime" value={value} />
                </Application>,
            );
            expect(wrapper.find(Value).text()).toBe('');
        });
    });

    it('should render a formated date when type is dateTime and value is datetime', () => {
        const values = [
            { date: '01/01/2020', formated: '1/1/2020, 12:00:00 AM' },
            { date: '01-01-2020', formated: '1/1/2020, 12:00:00 AM' },
            { date: new Date('01-01-2020'), formated: '1/1/2020, 12:00:00 AM' },
        ];
        values.forEach(({ date, formated }) => {
            const wrapper = mount(
                <Application>
                    <RecordField type="dateTime" value={date} />
                </Application>,
            );
            expect(wrapper.find(Value).text()).toBe(formated);
        });
    });

    it('should render a UniversalFormOverlay when isEditable is true', () => {
        const wrapper = mount(
            <Application>
                <RecordField value="Test" isEditable />
            </Application>,
        );
        expect(wrapper.find('UniversalFormOverlay').exists()).toBe(true);
    });

    it('should fire onChange when isEditable is true and form is submitted', () => {
        const onChangeFn = jest.fn();
        const wrapper = mount(
            <Application>
                <RecordField name="test" value="Test" onChange={onChangeFn} isEditable />
            </Application>,
        );
        wrapper.find(Container).simulate('click');
        wrapper.find('form').simulate('submit');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });

    it('should render an input with the correct type', () => {
        const wrapper = mount(
            <Application>
                <RecordField name="test" value="Test" type="number" isEditable />
            </Application>,
        );
        wrapper.find(Container).simulate('click');
        expect(wrapper.find('input').prop('type')).toBe('number');
    });

    it('should not open when a link is clicked', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Application>
                    <Value type="url" target="_blank" href="/" />
                </Application>
            </BrowserRouter>,
        );
        wrapper.find('a').simulate('click');
        expect(wrapper.find('input').exists()).toBe(false);
    });
});
