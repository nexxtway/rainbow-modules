import React from 'react';
import { mount } from 'enzyme';
import { ButtonIcon } from 'react-rainbow-components';
import Cards from '../cards';
import { StyledLabelCard } from '../styled';

const options = [
    {
        brand: 'Visa',
        id: '1234',
        last4: 1111,
        primary: true,
        expMonth: 24,
        expYear: 2020,
    },
    {
        brand: 'MasterCard',
        id: 'qwer',
        last4: 5454,
        expMonth: 24,
        expYear: 2020,
    },
    {
        brand: 'American Express',
        id: '12qw',
        last4: '0005',
    },
    {
        brand: 'Diners Club',
        id: '5678',
        last4: '0004',
        expMonth: 24,
        expYear: 2020,
    },
    {
        brand: 'Discover',
        id: '12qwe',
        last4: '0005',
    },
    {
        brand: 'JCB',
        id: '12qwer',
        last4: '0005',
    },
    {
        brand: 'UnionPay',
        id: '12qwert',
        last4: '0005',
    },
    {
        brand: 'UnknownCreditCard',
        id: '12qwerty',
        last4: '0005',
    },
    {
        brand: 'AmericanExpress',
        id: '12qwertyu',
        last4: '2107',
    },
    {
        brand: 'Amex',
        id: '12qwertyui',
        last4: '2107',
    },
    {
        brand: 'DinersClub',
        id: '12qwertyuio',
        last4: '2107',
        expMonth: 24,
        expYear: 2020,
    },
    {
        brand: 'Union Pay',
        id: '12qwertyuiop',
        last4: '2107',
    },
];

describe('<Cards/>', () => {
    it('should render right amount of children', () => {
        const component = mount(<Cards options={options} />);
        expect(component.find('UniversalPickerOption').length).toBe(12);
    });
    it('should render the right credit card icon', () => {
        const component = mount(<Cards options={options} />);
        expect(component.find('UniversalPickerOption').at(0).find('Visa').exists()).toBe(true);
        expect(component.find('UniversalPickerOption').at(1).find('Mastercard').exists()).toBe(
            true,
        );
        expect(component.find('UniversalPickerOption').at(2).find('Amex').exists()).toBe(true);
        expect(component.find('UniversalPickerOption').at(3).find('DinersClub').exists()).toBe(
            true,
        );
        expect(component.find('UniversalPickerOption').at(4).find('Discover').exists()).toBe(true);
        expect(component.find('UniversalPickerOption').at(5).find('JCB').exists()).toBe(true);
        expect(component.find('UniversalPickerOption').at(6).find('UnionPay').exists()).toBe(true);
        expect(component.find('UniversalPickerOption').at(7).find('UnknownCard').exists()).toBe(
            true,
        );
        expect(component.find('UniversalPickerOption').at(8).find('Amex').exists()).toBe(true);
        expect(component.find('UniversalPickerOption').at(9).find('Amex').exists()).toBe(true);
        expect(component.find('UniversalPickerOption').at(10).find('DinersClub').exists()).toBe(
            true,
        );
        expect(component.find('UniversalPickerOption').at(11).find('UnionPay').exists()).toBe(true);
    });
    it('should render StyledLabelCard when expMonth and expYear are passed', () => {
        const component = mount(<Cards options={options} />);
        expect(component.find('UniversalPickerOption').at(0).find(StyledLabelCard).exists()).toBe(
            true,
        );
    });
    it('should not render StyledLabelCard when expMonth and expYear are not passed', () => {
        const component = mount(<Cards options={options} />);
        expect(component.find('UniversalPickerOption').at(2).find(StyledLabelCard).exists()).toBe(
            false,
        );
    });
    it('should render Badge component with label "PRIMARY" when primary is true', () => {
        const component = mount(<Cards options={options} />);
        expect(component.find('UniversalPickerOption').at(0).find('Badge').prop('label')).toBe(
            'PRIMARY',
        );
    });
    it('should not render Badge component when primary is not true', () => {
        const component = mount(<Cards options={options} />);
        expect(component.find('UniversalPickerOption').at(1).find('Badge').exists()).toBe(false);
    });
    it('should render ButtonIcon component when onRemove is passed', () => {
        const onRemoveFn = jest.fn();
        const component = mount(<Cards options={options} onRemove={onRemoveFn} />);
        expect(component.find('UniversalPickerOption').at(0).find(ButtonIcon).exists()).toBe(true);
    });
    it('should not render ButtonIcon component when onRemove is not passed', () => {
        const component = mount(<Cards options={options} />);
        expect(component.find('UniversalPickerOption').at(0).find(ButtonIcon).exists()).toBe(false);
    });
});
