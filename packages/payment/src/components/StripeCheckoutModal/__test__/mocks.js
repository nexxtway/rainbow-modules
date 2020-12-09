export const mockElement = () => ({
    mount: jest.fn(),
    destroy: jest.fn(),
    on: jest.fn(),
    update: jest.fn(),
});

export const mockElements = () => {
    const elements = {};
    return {
        create: jest.fn((type) => {
            elements[type] = mockElement();
            return elements[type];
        }),
        getElement: jest.fn((type) => {
            return elements[type] || null;
        }),
    };
};

const result = {
    paymentIntent: {
        status: 'succeeded',
    },
    setupIntent: {
        status: 'succeeded',
    },
};

export const mockStripe = () => ({
    elements: jest.fn(() => mockElements()),
    createToken: jest.fn(),
    createSource: jest.fn(),
    createPaymentMethod: jest.fn(),
    confirmCardPayment: jest.fn().mockResolvedValue(result),
    confirmCardSetup: jest.fn().mockResolvedValue(result),
    paymentRequest: jest.fn(),
    _registerWrapper: jest.fn(),
    error: {
        message: 'Test error',
    },
});
