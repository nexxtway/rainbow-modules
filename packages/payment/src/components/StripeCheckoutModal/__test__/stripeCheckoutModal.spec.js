import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { showAppMessage } from '@rainbow-modules/app';
import { isEmptyObject } from '@rainbow-modules/validation';
import StripeCheckoutModal from '..';
import * as mocks from './mocks';
import { StripeInput } from '../styled';

jest.mock('@rainbow-modules/validation', () => ({
    __esModule: true,
    ...jest.requireActual('@rainbow-modules/validation'),
    isEmptyObject: jest.fn(() => true),
}));
jest.mock('@rainbow-modules/app', () => ({
    showAppMessage: jest.fn(),
}));
jest.mock('react-async-script-loader', () => () => (Component) => (props) => (
    <Component isScriptLoaded isScriptLoadSucceed {...props} />
));

describe('StripeCheckoutModal', () => {
    let mockStripe;
    let mockElements;
    let mockElement;
    let simulateChange;
    const changeEvent = {
        stripe: mockStripe,
        empty: false,
        complete: true,
        brand: '',
        error: false,
    };

    beforeEach(() => {
        mockStripe = mocks.mockStripe();
        mockElements = mocks.mockElements();
        mockElement = mocks.mockElement();
        mockStripe.elements.mockReturnValue(mockElements);
        mockElements.create.mockReturnValue(mockElement);
        jest.spyOn(React, 'useLayoutEffect');
        mockElement.on = jest.fn((event, fn) => {
            switch (event) {
                case 'change':
                    simulateChange = fn;
                    break;
                case 'blur':
                case 'focus':
                case 'escape':
                case 'ready':
                case 'click':
                    break;
                default:
                    throw new Error('TestSetupError: Unexpected event registration.');
            }
        });
        window.Stripe = jest.fn().mockReturnValue(mockStripe);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        showAppMessage.mockRestore();
    });

    it('should call clientSecretResolver on open', async () => {
        expect.assertions(1);
        const clientSecretResolver = jest.fn();
        await act(async () => {
            mount(
                <StripeCheckoutModal
                    apiKey="test-apiKey"
                    isOpen
                    variant="setupIntent"
                    clientSecretResolver={clientSecretResolver}
                />,
            );
        });
        expect(clientSecretResolver).toHaveBeenCalledTimes(1);
    });

    it('should not call clientSecretResolver if not open', () => {
        expect.assertions(1);
        const clientSecretResolver = jest.fn();
        mount(
            <StripeCheckoutModal
                apiKey="test-apiKey"
                clientSecretResolver={clientSecretResolver}
            />,
        );
        expect(clientSecretResolver).toHaveBeenCalledTimes(0);
    });

    it('should render a loading indicator when loading', async () => {
        expect.assertions(1);
        let wrapper;
        await act(async () => {
            wrapper = mount(<StripeCheckoutModal apiKey="test-apikey" isOpen />);
        });
        expect(wrapper.find('LoadingShape').exists()).toBe(true);
    });

    it('should call onCancel when closed', async () => {
        expect.assertions(1);
        const onCancelFn = jest.fn();
        let wrapper;
        await act(async () => {
            wrapper = mount(
                <StripeCheckoutModal apiKey="test-apikey" isOpen onCancel={onCancelFn} />,
            );
        });
        wrapper.find('#modal-close-button').first().simulate('click');
        expect(onCancelFn).toHaveBeenCalledTimes(1);
    });

    it('should call confirmCardSetup', async (done) => {
        expect.assertions(1);
        const onSuccess = () => {
            setImmediate(() => {
                try {
                    expect(mockStripe.confirmCardSetup).toHaveBeenCalledTimes(1);
                    done();
                } catch (error) {
                    done(error);
                }
            });
        };
        let wrapper;
        await act(async () => {
            wrapper = mount(
                <StripeCheckoutModal
                    apiKey="test-apikey"
                    clientSecretResolver={jest.fn()}
                    onSuccess={onSuccess}
                    isOpen
                />,
            );
        });
        wrapper.update();
        act(() => {
            simulateChange(changeEvent);
        });
        await act(async () => {
            wrapper.find('form').simulate('submit');
        });
    });

    it('should call confirmCardPayment', async (done) => {
        expect.assertions(1);
        const onSuccess = () => {
            setImmediate(() => {
                try {
                    expect(mockStripe.confirmCardPayment).toHaveBeenCalledTimes(1);
                    done();
                } catch (error) {
                    done(error);
                }
            });
        };
        let wrapper;
        await act(async () => {
            wrapper = mount(
                <StripeCheckoutModal
                    apiKey="test-apikey"
                    clientSecretResolver={jest.fn()}
                    variant="paymentIntent"
                    onSuccess={onSuccess}
                    isOpen
                />,
            );
        });
        wrapper.update();
        act(() => {
            simulateChange(changeEvent);
        });
        await act(async () => {
            wrapper.find('form').simulate('submit');
        });
    });

    it('should show an error message when api method resolves with error', async () => {
        expect.assertions(1);
        mockStripe.confirmCardSetup.mockResolvedValueOnce({
            error: 'Test error',
        });
        let wrapper;
        await act(async () => {
            wrapper = mount(
                <StripeCheckoutModal
                    apiKey="test-apikey"
                    clientSecretResolver={jest.fn()}
                    isOpen
                />,
            );
        });
        wrapper.update();
        act(() => {
            simulateChange(changeEvent);
        });
        await act(async () => {
            wrapper.find('form').simulate('submit');
        });
        expect(showAppMessage).toHaveBeenCalledWith({
            variant: 'error',
            message: 'Upps! Something went wrong',
        });
    });

    it('should show an error message when api method throws an error', async () => {
        expect.assertions(1);
        mockStripe.confirmCardSetup.mockImplementationOnce(() => {
            throw new Error();
        });
        let wrapper;
        await act(async () => {
            wrapper = mount(
                <StripeCheckoutModal
                    apiKey="test-apikey"
                    clientSecretResolver={jest.fn()}
                    isOpen
                />,
            );
        });
        wrapper.update();
        act(() => {
            simulateChange(changeEvent);
        });
        await act(async () => {
            wrapper.find('form').simulate('submit');
        });
        expect(showAppMessage).toHaveBeenCalledWith({
            variant: 'error',
            message: 'Upps! Something went wrong',
        });
    });

    it('should show an error message when clientSecretResolver throws an error', async () => {
        expect.assertions(1);
        const clientSecretResolver = jest.fn().mockImplementationOnce(() => {
            throw new Error();
        });
        let wrapper;
        await act(async () => {
            wrapper = mount(
                <StripeCheckoutModal
                    apiKey="test-apikey"
                    clientSecretResolver={clientSecretResolver}
                    isOpen
                />,
            );
        });
        wrapper.update();
        expect(showAppMessage).toHaveBeenCalledWith({
            variant: 'error',
            message: 'Upps! Something went wrong',
        });
    });

    it('should show errors when there is missing information', async () => {
        expect.assertions(2);
        let wrapper;
        await act(async () => {
            wrapper = mount(<StripeCheckoutModal apiKey="test-apikey" isOpen />);
        });
        wrapper.update();
        act(() => {
            simulateChange({
                stripe: mockStripe,
                empty: false,
                complete: false,
                brand: '',
                error: false,
            });
        });
        await act(async () => {
            wrapper.find('form').simulate('submit');
        });
        wrapper.update();
        expect(wrapper.find('Input').prop('error')).toBe('Cardholder name is required');
        expect(wrapper.find(StripeInput).prop('error')).toBe('Your card information is required');
    });

    it('should show errors when stripe card has error', async () => {
        isEmptyObject.mockReturnValueOnce(false);
        let wrapper;
        await act(async () => {
            wrapper = mount(<StripeCheckoutModal apiKey="test-apikey" isOpen />);
        });
        wrapper.update();
        act(() => {
            simulateChange({
                stripe: mockStripe,
                empty: false,
                complete: true,
                brand: '',
                error: {
                    message: 'Test error',
                },
            });
        });
        await act(async () => {
            wrapper.find('form').simulate('submit');
        });
        wrapper.update();
        expect(wrapper.find(StripeInput).prop('error')).toBe('Test error');
    });
});
