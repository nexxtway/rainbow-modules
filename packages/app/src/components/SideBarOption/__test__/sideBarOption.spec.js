import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SideBarOption from '..';

describe('<SideBarOption />', () => {
    it('should render a SidebarItem with the right props', () => {
        const component = mount(
            <MemoryRouter>
                <SideBarOption icon="icon" name="name" label="label" />
            </MemoryRouter>,
        );
        const expectedProps = {
            className: undefined,
            style: undefined,
            icon: 'icon',
            name: 'name',
            label: 'label',
            onClick: expect.any(Function),
            href: undefined,
        };
        const item = component.find('SidebarItem');
        expect(item.props()).toEqual(expectedProps);
    });

    it('should render selectedIcon when item is selected', () => {
        const SelectedIcon = () => <span>SelectedIcon</span>;
        const component = mount(
            <MemoryRouter>
                <SideBarOption
                    icon="icon"
                    selectedIcon={<SelectedIcon />}
                    name="name"
                    label="label"
                    isSelected
                />
            </MemoryRouter>,
        );
        expect(component.find(SelectedIcon).exists()).toBe(true);
    });

    it('should fallback to icon when selectedIcon is not passed', () => {
        const Icon = () => <span>Icon</span>;
        const component = mount(
            <MemoryRouter>
                <SideBarOption icon={<Icon />} name="name" label="label" isSelected />
            </MemoryRouter>,
        );
        expect(component.find(Icon).exists()).toBe(true);
    });
});
