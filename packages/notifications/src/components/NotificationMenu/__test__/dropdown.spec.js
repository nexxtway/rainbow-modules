import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Dropdown from '../dropdown';
import { Header, Footer } from '../styled';

describe('<Dropdown />', () => {
    it('should render the label passed inside the Header', () => {
        const label = <span data-test="dropdown">Test</span>;
        const wrapper = mount(
            <Application>
                <Dropdown label={label} />
            </Application>,
        );
        const header = wrapper.find(Header);
        expect(header.find('[data-test="dropdown"]').exists()).toBe(true);
    });

    it('should render the unreads text', () => {
        const wrapper = mount(
            <Application>
                <Dropdown unreads={3} />
            </Application>,
        );
        const header = wrapper.find(Header);
        const unreads = header.find('span').last();
        expect(unreads.text()).toBe('3 Unread');
    });

    it('should render the footer when passed', () => {
        const wrapper = mount(
            <Application>
                <Dropdown footer="Test footer" />
            </Application>,
        );
        const footer = wrapper.find(Footer);
        expect(footer.exists()).toBe(true);
        expect(footer.text()).toBe('Test footer');
    });
});
