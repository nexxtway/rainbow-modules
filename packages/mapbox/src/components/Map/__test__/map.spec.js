import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import mapboxgl from 'mapbox-gl';
import Map from '../index';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn(),
        once: jest.fn(),
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
        mount(
            <Application>
                <Map accessToken="qwerty" center={[-74.5, 40]} zoom={9} />
            </Application>,
        );
        expect(mapboxgl.Map).toBeCalledWith({
            accessToken: 'qwerty',
            center: [-74.5, 40],
            container: expect.any(Node),
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 9,
        });
    });
    it('should call navigator.geolocation.getCurrentPosition when center is not passed', () => {
        const mockGeolocation = { getCurrentPosition: jest.fn() };
        global.navigator.geolocation = mockGeolocation;

        mount(
            <Application>
                <Map accessToken="qwerty" zoom={9} />
            </Application>,
        );
        expect(mockGeolocation.getCurrentPosition).toBeCalled();
    });
    it('should init map with resolved position', () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
                Promise.resolve(
                    success({
                        coords: { latitude: 51.1, longitude: 45.3 },
                    }),
                ),
            ),
        };
        global.navigator.geolocation = mockGeolocation;

        mount(
            <Application>
                <Map accessToken="qwerty" defaultCenter={[-70.5, 31]} zoom={9} />
            </Application>,
        );
        expect(mapboxgl.Map).toBeCalledWith({
            accessToken: 'qwerty',
            center: [45.3, 51.1],
            container: expect.any(Node),
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 9,
        });
    });
    it('should init map with the default center passed', () => {
        const mockGeolocation = {
            getCurrentPosition: jest
                .fn()
                .mockImplementationOnce((_success, error) => Promise.resolve(error())),
        };
        global.navigator.geolocation = mockGeolocation;

        mount(
            <Application>
                <Map accessToken="qwerty" defaultCenter={[-70.5, 31]} zoom={9} />
            </Application>,
        );
        expect(mapboxgl.Map).toBeCalledWith({
            accessToken: 'qwerty',
            center: [-70.5, 31],
            container: expect.any(Node),
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 9,
        });
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
