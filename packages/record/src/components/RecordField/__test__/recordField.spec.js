import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import { BrowserRouter } from 'react-router-dom';
import { UniversalForm } from '@rainbow-modules/forms';
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
            { date: '01/01/2020', formated: '1/1/2020, 12:00 AM' },
            { date: '01-01-2020', formated: '1/1/2020, 12:00 AM' },
            { date: new Date('01-01-2020'), formated: '1/1/2020, 12:00 AM' },
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
                <UniversalForm>
                    <RecordField value="Test" isEditable name="test" />
                </UniversalForm>
            </Application>,
        );
        expect(wrapper.find('UniversalFormOverlay').exists()).toBe(true);
    });

    it('should fire onChange when isEditable is true and form is submitted', () => {
        const onSubmitMockFn = jest.fn();
        const wrapper = mount(
            <Application>
                <UniversalForm initialValues={{ test: 'test value' }} onSubmit={onSubmitMockFn}>
                    <RecordField name="test" isEditable />
                </UniversalForm>
            </Application>,
        );
        wrapper.find(Container).simulate('click');
        wrapper.find('form').at(0).simulate('submit');
        expect(onSubmitMockFn).toHaveBeenCalledTimes(1);
        expect(onSubmitMockFn.mock.calls[0][0]).toEqual({ test: 'test value' });
    });

    it('should render an input with the correct type', () => {
        const wrapper = mount(
            <Application>
                <UniversalForm>
                    <RecordField name="test" value="Test" type="number" isEditable />
                </UniversalForm>
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

    it('should render a number formatted', () => {
        const wrapper = mount(
            <Application>
                <RecordField type="number" value={1234} />
            </Application>,
        );
        expect(wrapper.find(Value).text()).toBe('1,234');
    });

    it('should render the same value passed (not formatted) when pass a custom component', () => {
        mount(
            <Application>
                <RecordField
                    type="number"
                    value={1234}
                    component={({ value }) => {
                        expect(value).toBe(1234);
                        return value;
                    }}
                />
            </Application>,
        );
    });
});
