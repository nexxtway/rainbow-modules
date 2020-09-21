import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';

export default function mountWithApplication(el, options) {
    return mount(<Application>{el}</Application>, options).find(el.type);
}
