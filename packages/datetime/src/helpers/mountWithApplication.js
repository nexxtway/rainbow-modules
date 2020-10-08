import React from 'react';
import { mount } from 'enzyme';
import { Application } from 'react-rainbow-components';

export default function mountWithApplication(element, options) {
    return mount(<Application>{element}</Application>, options).find(element.type);
}
