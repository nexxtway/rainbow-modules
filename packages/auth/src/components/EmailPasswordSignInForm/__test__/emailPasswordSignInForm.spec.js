import React from 'react';
import { showAppMessage, showAppSpinner, hideAppSpinner } from '@rainbow-modules/app';
import EmailPasswordSignInForm from '../index';
import { mountWithIntl } from '../../../helpers/intlEnzyme';

const mockSignInWithEmailAndPassword = jest.fn().mockResolvedValueOnce().mockRejectedValueOnce();
jest.mock('@rainbow-modules/firebase-hooks', () => ({
    useFirebaseApp: jest.fn(() => ({
        auth: () => ({ signInWithEmailAndPassword: mockSignInWithEmailAndPassword }),
    })),
}));

jest.mock('@rainbow-modules/app', () => ({
    showAppMessage: jest.fn(),
    showAppSpinner: jest.fn(),
    hideAppSpinner: jest.fn(),
}));

describe('<EmailPasswordSignInForm />', () => {
    beforeEach(() => {
        showAppMessage.mockClear();
        showAppSpinner.mockClear();
        hideAppSpinner.mockClear();
    });
    it('should render a form with name, email and password fields', () => {
        const component = mountWithIntl(<EmailPasswordSignInForm />);
        expect(component.find('form').exists()).toBe(true);
        expect(component.find('Input').length).toBe(2);
    });

    it('should render email field with type email', () => {
        const component = mountWithIntl(<EmailPasswordSignInForm />);
        expect(component.find('Input').at(0).prop('type')).toBe('email');
    });

    it('should render password field with type password', () => {
        const component = mountWithIntl(<EmailPasswordSignInForm />);
        expect(component.find('Input').at(1).prop('type')).toBe('password');
    });

    it('should render a submit button', () => {
        const component = mountWithIntl(<EmailPasswordSignInForm />);
        expect(component.find('Button[type="submit"]').exists()).toBe(true);
    });

    it('should call firebase signInWithEmailAndPassword', () => {
        const component = mountWithIntl(<EmailPasswordSignInForm />);
        const emailInput = component.find('Input').at(0).find('input').at(0);
        const passwordInput = component.find('Input').at(1).find('input').at(0);
        emailInput.simulate('change', { target: { value: 'user@domain.com' } });
        passwordInput.simulate('change', { target: { value: 'the_password' } });
        component.find('form').simulate('submit');
        expect(mockSignInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    });

    it('should show error message using app message', async () => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const component = mountWithIntl(<EmailPasswordSignInForm />);
        const emailInput = component.find('Input').at(0).find('input').at(0);
        const passwordInput = component.find('Input').at(1).find('input').at(0);
        emailInput.simulate('change', { target: { value: 'user@domain.com' } });
        passwordInput.simulate('change', { target: { value: 'the_password' } });
        component.find('form').simulate('submit');
        await sleep(100);
        expect(showAppMessage).toHaveBeenCalledTimes(1);
    });
});
