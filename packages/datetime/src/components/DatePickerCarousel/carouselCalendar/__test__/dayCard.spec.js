import React from 'react';
import mountWithApplication from '../../../../helpers/mountWithApplication';
import DayCard from '../dayCard';
import { StyledDisabledDayCard } from '../styled';

describe('<DayCard />', () => {
    it('should render the right day', () => {
        const date = new Date('2020/10/21');
        const component = mountWithApplication(<DayCard date={date} />);
        expect(component.find('span').at(0).text()).toBe('Wed');
        expect(component.find('span').at(1).text()).toBe('21');
    });
    it('should call onChange with the right date when click the button', () => {
        const date = new Date('04/24/2019');
        const onChangeMockFn = jest.fn();
        const component = mountWithApplication(<DayCard date={date} onChange={onChangeMockFn} />);
        component.find('button').simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(new Date('04/24/2019'));
    });
    it('should render the day as disabled', () => {
        const date = new Date('04/24/2019');
        const component = mountWithApplication(<DayCard date={date} isDisabled />);
        expect(component.find(StyledDisabledDayCard).exists()).toBe(true);
    });
});
