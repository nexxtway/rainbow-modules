import React from 'react';
import { mount } from 'enzyme';
import { ButtonIcon } from 'react-rainbow-components';
import FloatingSearchButtonIcon from '..';
import FloatingSearch from '../../FloatingSearch';

jest.mock('../../FloatingSearch', () =>
    jest.fn(({ ...props }) => <div {...props}>hello world</div>),
);

describe('<FloatingSearchButtonIcon />', () => {
    it('should render a button and not render FloatingSearch', () => {
        const component = mount(<FloatingSearchButtonIcon />);
        const button = component.find(ButtonIcon);
        expect(button.exists()).toBe(true);
        expect(component.find(FloatingSearch).prop('isVisible')).toBe(false);
    });

    it('should render a FloatingSearch when click on button', () => {
        const component = mount(<FloatingSearchButtonIcon />);
        const button = component.find(ButtonIcon);
        button.simulate('click');
        expect(component.find(FloatingSearch).prop('isVisible')).toBe(true);
    });
});
