import React from 'react';
import { mount } from 'enzyme';

export default function mountWithRef(elWithRef, options) {
    const WithRef = () => elWithRef;
    return mount(<WithRef />, options);
}
