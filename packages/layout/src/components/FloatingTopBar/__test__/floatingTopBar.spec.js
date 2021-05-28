import { mount } from 'enzyme';
import React from 'react';
import { Application } from 'react-rainbow-components';
import FloatingTopBar from '..';

describe('<FloatingTopBar />', () => {
    it('should render the children passed', () => {
        const component = mount(
            <Application>
                <FloatingTopBar isOpen>
                    <p data-test>Test</p>
                </FloatingTopBar>
            </Application>,
        );
        expect(component.find('[data-test=true]').exists()).toBe(true);
    });
});
