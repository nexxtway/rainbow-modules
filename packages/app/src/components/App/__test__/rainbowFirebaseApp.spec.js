import React from 'react';
import { mount } from 'enzyme';
import RainbowFirebaseApp from '..';
import app from '../../../../../../firebase';

export default function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('<RainbowFirebaseApp', () => {
    it('should render AppSpinner while initializing', () => {
        const initialize = async () => {
            await sleep(2000);
        };
        const component = mount(
            <RainbowFirebaseApp app={app} initialize={initialize}>
                <p>Test app</p>
            </RainbowFirebaseApp>,
        );
        expect(component.find('Spinner').exists()).toBe(true);
    });
});
