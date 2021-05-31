import { mount } from 'enzyme';
import React from 'react';
import { Application } from 'react-rainbow-components';
import FloatingBar from '..';

describe('<FloatingBar />', () => {
    it('should render the children passed', () => {
        const component = mount(
            <Application>
                <FloatingBar isVisible>
                    <p data-test>Test</p>
                </FloatingBar>
            </Application>,
        );
        expect(component.find('[data-test=true]').exists()).toBe(true);
    });
});
