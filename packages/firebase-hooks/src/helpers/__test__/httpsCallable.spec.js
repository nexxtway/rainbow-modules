import { httpsCallable as fbHttpsCallable } from 'firebase/functions';
import httpsCallable from '../httpsCallable';

jest.mock('firebase/functions', () => {
    const originalModule = jest.requireActual('firebase/functions');
    return {
        __esModule: true,
        ...originalModule,
        httpsCallable: jest.fn(),
    };
});

describe('httpsCallable', () => {
    beforeEach(() => {
        fbHttpsCallable.mockClear();
    });

    it('should call ref.httpsCallable', () => {
        const ref = { httpsCallable: jest.fn() };
        const name = 'name';
        httpsCallable(ref, name);
        expect(ref.httpsCallable).toHaveBeenCalledTimes(1);
        expect(ref.httpsCallable).toHaveBeenCalledWith(name);
    });

    it('should call httpsCallable from Firebase', () => {
        const ref = {};
        const name = 'name';
        httpsCallable(ref, name);
        expect(fbHttpsCallable).toHaveBeenCalledTimes(1);
        expect(fbHttpsCallable).toHaveBeenCalledWith(ref, name);
    });
});
