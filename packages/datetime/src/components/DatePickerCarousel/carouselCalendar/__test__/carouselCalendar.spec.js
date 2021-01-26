import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import mountWithApplication from '../../../../helpers/mountWithApplication';
import CarouselCalendar from '../index';

jest.mock('../helpers/getVisibleCards', () => jest.fn(() => 7));

describe('<CarouselCalendar />', () => {
    it('should render the component when pass falsy values', () => {
        const values = ['', undefined, null, 0];
        values.forEach((value) => {
            const component = mountWithApplication(<CarouselCalendar value={value} />);
            expect(component.exists()).toBe(true);
        });
    });
    it('should render correct number of days', () => {
        const component = mountWithApplication(<CarouselCalendar />);
        expect(component.find('DayCard')).toHaveLength(7);
    });
    it('should fire onChange with date as parameter when click on a day', () => {
        const mockChangeFn = jest.fn();
        const date = new Date('2020/10/20');
        const component = mountWithApplication(
            <CarouselCalendar value={date} onChange={mockChangeFn} />,
        );
        component.find('DayCard').at(4).simulate('click');
        expect(mockChangeFn).toHaveBeenCalledWith(new Date('2020/10/23'));
    });
    it('should set to disable the scroll left button when minDate is equal or beyond than first visible date', () => {
        const date = new Date('2020/10/21');
        const minDate = new Date('2020/10/20');
        const component = mountWithApplication(<CarouselCalendar value={date} minDate={minDate} />);
        const scrollLeft = component.find(ButtonIcon).at(0);
        expect(scrollLeft.prop('disabled')).toBe(true);
    });
    it('should set to disable the scroll right button when maxDate is equal or below than the last visible date', () => {
        const date = new Date('2020/10/21');
        const maxDate = new Date('2020/10/22');
        const component = mountWithApplication(<CarouselCalendar value={date} maxDate={maxDate} />);
        const scrollLeft = component.find(ButtonIcon).at(1);
        expect(scrollLeft.prop('disabled')).toBe(true);
    });
    it.skip('should render the right date when value is updated', () => {
        const date = new Date('2020/10/21');
        const newDate = new Date('10/24/2019');
        const component = mountWithApplication(<CarouselCalendar value={date} />);
        component.setProps({
            value: newDate,
        });
        expect(component.find('DayCard').at(4).prop('date')).toEqual(newDate);
    });
});
