import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';
import Footer from '..';

describe('Footer', () => {
    it('should call onFilter when the form is submit', () => {
        const onRequestCloseMock = jest.fn();
        const wrapper = mount(
            <Application>
                <Footer onRequestClose={onRequestCloseMock} />
            </Application>,
        );
        wrapper.find('button').first().simulate('click');
        expect(onRequestCloseMock).toBeCalledTimes(1);
    });
});
