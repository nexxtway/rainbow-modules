import React from 'react';
import mountWithApplication from '../../../../helpers/mountWithApplication';
import CarouselInput from '../index';
import CarouselCalendar from '../../carouselCalendar';

jest.mock('../../carouselCalendar/helpers/getVisibleCards', () => jest.fn(() => 7));

describe('<CarouselInput />', () => {
    it('should pass right props to child components', () => {
        const date = new Date('2020/10/21');
        const component = mountWithApplication(<CarouselInput value={date} />);
        expect(component.find(CarouselCalendar).prop('value')).toEqual(date);
    });
    it('should fire onChange when click on a date', () => {
        const mockChangeFn = jest.fn();
        const date = new Date('2020/10/20');
        const component = mountWithApplication(
            <CarouselInput value={date} onChange={mockChangeFn} />,
        );
        component.find('DayCard').at(4).simulate('click');
        expect(mockChangeFn).toHaveBeenCalledWith(new Date('2020/10/23'));
    });
});
