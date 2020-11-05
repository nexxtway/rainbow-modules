import React from 'react';
import { mount } from 'enzyme';
import BatchActionsBar from '..';
import { StyledLabel } from '../styled';

describe('<BatchActionsBar />', () => {
    it('should render an span with the label', () => {
        const component = mount(<BatchActionsBar label="Rides Selected" isVisible />);
        const span = component.find(StyledLabel);
        expect(span.text().includes('Rides Selected')).toBe(true);
    });

    it('should render an span with the itemsLength', () => {
        const component = mount(<BatchActionsBar itemsLength={253} isVisible />);
        const badge = component.find('Badge');
        const span = badge.find('span');
        expect(span.at(1).text().includes('253')).toBe(true);
    });

    it('should call onRequestCloseMock when click on close button', () => {
        const onRequestCloseMock = jest.fn();
        const component = mount(<BatchActionsBar onRequestClose={onRequestCloseMock} isVisible />);
        component.find('button').simulate('click');
        expect(onRequestCloseMock).toHaveBeenCalledTimes(1);
    });

    it('should render a children <p/>', () => {
        const component = mount(
            <BatchActionsBar isVisible>
                <p>hola mundo</p>
            </BatchActionsBar>,
        );
        const p = component.find('p');
        expect(p.text()).toBe('hola mundo');
    });

    it('should not render anything when it not has isVisible prop', () => {
        const component = mount(<BatchActionsBar />);
        expect(component.find('div').exists()).toBe(false);
    });
});
