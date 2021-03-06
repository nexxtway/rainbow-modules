import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Application } from 'react-rainbow-components';
import mapboxgl from 'mapbox-gl';
import Map from '..';

jest.useFakeTimers();

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn(),
        once: (eventName, callback) => {
            setTimeout(callback, 100);
        },
    })),
    NavigationControl: jest.fn(),
}));
jest.mock('mapbox-gl/dist/mapbox-gl.css', () => ({}));

describe('<Map />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

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
        const component = mount(
            <Application>
                <Map accessToken="qwerty" center={[-74.5, 40]} zoom={9} />
            </Application>,
        );
        expect(component.find('Spinner').exists()).toBe(true);
    });
    it('should init map with the center passed', () => {
        act(() => {
            mount(
                <Application>
                    <Map accessToken="qwerty" center={[-74.5, 40]} zoom={9} />
                </Application>,
            );
            jest.runAllTimers();
        });
        expect(mapboxgl.Map).toBeCalledWith({
            accessToken: 'qwerty',
            center: [-74.5, 40],
            container: expect.any(Node),
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 9,
        });
    });
    it('should render the children passed', () => {
        let component;
        act(() => {
            component = mount(
                <Application>
                    <Map accessToken="qwerty" center={[-74.5, 40]} zoom={9}>
                        <p>child</p>
                    </Map>
                </Application>,
            );
            jest.runAllTimers();
        });
        component.update();
        const pElement = component.find('p');
        expect(pElement.text()).toBe('child');
    });
});
