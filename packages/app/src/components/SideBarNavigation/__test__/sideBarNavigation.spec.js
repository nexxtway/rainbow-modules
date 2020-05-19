import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Application } from 'react-rainbow-components';
import SideBarNavigation from '..';
import SideBarOption from '../../SideBarOption';

describe('<SideBarNavigation />', () => {
    test('should render the right amount of children', () => {
        const component = mount(
            <Application>
                <MemoryRouter>
                    <SideBarNavigation>
                        <SideBarOption />
                        <SideBarOption />
                        <SideBarOption />
                    </SideBarNavigation>
                </MemoryRouter>
            </Application>,
        );
        const sideBar = component.find(SideBarNavigation);
        expect(sideBar.find(SideBarOption).length).toBe(3);
    });
});
