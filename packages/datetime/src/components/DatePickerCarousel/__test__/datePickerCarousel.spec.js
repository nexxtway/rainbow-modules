import React from 'react';
import mountWithApplication from '../../../helpers/mountWithApplication';
import DatePickerCarousel from '../index';
import CarouselInput from '../carouselInput';
import { StyledLabel } from '../carouselInput/styled';

const date = new Date('2020/10/21');
jest.mock('../carouselCalendar/helpers/getVisibleCards', () => jest.fn(() => 7));

describe('<DatePickerCarousel />', () => {
    it('should call onChange with the right value when date on the carousel is clicked', () => {
        const mockChangeFn = jest.fn();
        const component = mountWithApplication(
            <DatePickerCarousel value={date} onChange={mockChangeFn} />,
        );
        component.find('DayCard').at(4).simulate('click');
        expect(mockChangeFn).toHaveBeenCalledWith(new Date('2020/10/24'));
    });
    it('should fire onClick when label is clicked', () => {
        const mockClickFn = jest.fn();
        const component = mountWithApplication(
            <DatePickerCarousel value={date} onClick={mockClickFn} />,
        );
        component.find(CarouselInput).find(StyledLabel).simulate('click');
        expect(mockClickFn).toHaveBeenCalled();
    });
});
