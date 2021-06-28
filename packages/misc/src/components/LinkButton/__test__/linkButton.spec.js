import React from 'react';
import { mount } from 'enzyme';
import { Link } from 'react-router-dom';
import RainbowFirebaseApp from '../../../../../app/src/components/App';
import LinkButton from '..';

describe('<LinkButton />', () => {
    it('should render a Link when target is not `_blank`', () => {
        const component = mount(
            <RainbowFirebaseApp>
                <LinkButton>Test</LinkButton>
            </RainbowFirebaseApp>,
        );
        expect(component.find(Link).exists()).toBe(true);
    });

    it('should render a regular anchor when target is `_blank`', () => {
        const component = mount(
            <RainbowFirebaseApp>
                <LinkButton>Test</LinkButton>
            </RainbowFirebaseApp>,
        );
        expect(component.find('a').exists()).toBe(true);
    });
});
