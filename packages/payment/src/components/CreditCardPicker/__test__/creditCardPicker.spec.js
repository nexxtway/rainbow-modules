import React from 'react';
import { mount } from 'enzyme';
import CreditCardPicker from '../index';
import { AddNewCardButton } from '../styled';

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
];

describe('<CreditCardPicker/>', () => {
    it('should render AddNewCardButton when onAdd is passed', () => {
        const onAddFn = jest.fn();
        const component = mount(
            <CreditCardPicker
                label="Select a credit card"
                required
                options={options}
                onAdd={onAddFn}
            />,
        );
        expect(component.find(AddNewCardButton).exists()).toBe(true);
    });
    it('should not render AddNewCardButton when onAdd is not passed', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <CreditCardPicker
                label="Select a credit card"
                required
                onChange={onChangeFn}
                options={options}
            />,
        );
        expect(component.find(AddNewCardButton).exists()).toBe(false);
    });
    it('should call the function passed in onAdd prop', () => {
        const onAddFn = jest.fn();
        const component = mount(
            <CreditCardPicker
                label="Select a credit card"
                required
                options={options}
                onAdd={onAddFn}
            />,
        );
        const buttonComponent = component.find(AddNewCardButton);
        buttonComponent.simulate('click');
        expect(onAddFn).toHaveBeenCalled();
    });
    it('should render Cards component when isLoading is not passed', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <CreditCardPicker
                label="Select a credit card"
                required
                onChange={onChangeFn}
                options={options}
            />,
        );
        expect(component.find('Cards').exists()).toBe(true);
    });
    it('should not render Cards component when isLoading is passed', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <CreditCardPicker
                label="Select a credit card"
                required
                onChange={onChangeFn}
                options={options}
                isLoading
            />,
        );
        expect(component.find('Cards').exists()).toBe(false);
    });
    it('should render Loading component when isLoading is passed', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <CreditCardPicker
                label="Select a credit card"
                required
                onChange={onChangeFn}
                options={options}
                isLoading
            />,
        );
        expect(component.find('Loading').exists()).toBe(true);
    });
    it('should not render Loading component when isLoading is not passed', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <CreditCardPicker
                label="Select a credit card"
                required
                onChange={onChangeFn}
                options={options}
            />,
        );
        expect(component.find('Loading').exists()).toBe(false);
    });
});
