import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import RecordField from '..';
import Value from '../value';

describe('<Tile />', () => {
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
            { date: 0, formated: '1/1/1970, 12:00:00 AM' },
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
});
