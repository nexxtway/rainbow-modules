import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Map from '../index';

describe('<Map />', () => {
    it('should render two p with right text when accessToken is undefined', () => {
        const component = mount(
            <Application>
                <Map center={[-74.5, 40]} zoom={9} />
            </Application>,
        );
        const pElements = component.find('p');
        expect(pElements.at(0).text()).toBe('Oops! Something went wrong.');
        expect(pElements.at(1).text()).toBe('We need an accessToken to render the map');
    });
    it('should initially render the Spinner when accessToken is passed', () => {
        const component = mount(<Map accessToken="qwerty" center={[-74.5, 40]} zoom={9} />);
        expect(component.find('Spinner').exists()).toBe(true);
    });
    it('should render the children passed', () => {
        const component = mount(
            <Application>
                <Map accessToken="qwerty" center={[-74.5, 40]} zoom={9}>
                    <p>child</p>
                </Map>
            </Application>,
        );
        const pElement = component.find('p');
        expect(pElement.text()).toBe('child');
    });
});
