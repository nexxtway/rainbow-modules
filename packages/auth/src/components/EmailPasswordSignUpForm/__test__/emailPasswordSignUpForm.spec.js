import React from 'react';
import * as actions from '@rainbow-modules/app';
import EmailPasswordSignUpForm from '..';
import { mountWithIntl } from '../../../helpers/intlEnzyme';

const mockCreateUserWithEmailAndPassword = jest
    .fn()
    .mockResolvedValueOnce()
    .mockRejectedValueOnce();
jest.mock('@rainbow-modules/firebase-hooks', () => ({
    useFirebaseApp: () => ({
        auth: () => ({ createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword }),
    }),
}));

jest.mock('@rainbow-modules/app', () => ({
    showAppMessage: jest.fn(),
    showAppSpinner: jest.fn(),
    hideAppSpinner: jest.fn(),
}));

describe('<EmailPasswordSignUpForm />', () => {
    beforeEach(() => {
        actions.showAppMessage.mockClear();
        actions.showAppSpinner.mockClear();
        actions.hideAppSpinner.mockClear();
    });

    it('should render a form with name, email and password fields', () => {
        const component = mountWithIntl(<EmailPasswordSignUpForm />);
        expect(component.find('form').exists()).toBe(true);
        expect(component.find('Input').length).toBe(3);
    });

    it('should render email field with type email', () => {
        const component = mountWithIntl(<EmailPasswordSignUpForm />);
        expect(component.find('Input').at(1).prop('type')).toBe('email');
    });

    it('should render a submit button', () => {
        const component = mountWithIntl(<EmailPasswordSignUpForm />);
        expect(component.find('Button[type="submit"]').exists()).toBe(true);
    });

    it('should call firebase createUserWithEmailAndPassword', () => {
        const component = mountWithIntl(<EmailPasswordSignUpForm />);
        component.find('form').simulate('submit');
        expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    });

    it('should show error message using app message', async () => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const component = mountWithIntl(<EmailPasswordSignUpForm />);
        component.find('form').simulate('submit');
        await sleep(100);
        expect(actions.showAppMessage).toHaveBeenCalledTimes(1);
    });
});
