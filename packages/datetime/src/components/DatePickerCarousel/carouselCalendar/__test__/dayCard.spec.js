import React from 'react';
import mountWithApplication from '../../../../helpers/mountWithApplication';
import DayCard from '../dayCard';

describe('<DayCard />', () => {
    it('should render the right day', () => {
        const date = new Date('2020/10/21');
        const component = mountWithApplication(<DayCard date={date} />);
        expect(component.find('span').at(0).text()).toBe('Wed');
        expect(component.find('span').at(1).text()).toBe('21');
    });
});
