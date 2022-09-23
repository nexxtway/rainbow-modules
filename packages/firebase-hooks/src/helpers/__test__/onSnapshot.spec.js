import { onSnapshot as fbOnSnapshot } from 'firebase/firestore';
import onSnapshot from '../onSnapshot';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        onSnapshot: jest.fn(),
    };
});

describe('onSnapshot', () => {
    beforeEach(() => {
        fbOnSnapshot.mockClear();
    });

    it('should call ref.onSnapshot', () => {
        const ref = { onSnapshot: jest.fn() };
        const callback = jest.fn();
        const errorCallback = jest.fn();
        onSnapshot(ref, callback, errorCallback);
        expect(ref.onSnapshot).toHaveBeenCalledTimes(1);
        expect(ref.onSnapshot).toHaveBeenCalledWith(callback, errorCallback);
    });

    it('should call onSnapshot from Firebase', () => {
        const ref = {};
        const callback = jest.fn();
        const errorCallback = jest.fn();
        onSnapshot(ref, callback, errorCallback);
        expect(fbOnSnapshot).toHaveBeenCalledTimes(1);
        expect(fbOnSnapshot).toHaveBeenCalledWith(ref, callback, errorCallback);
    });
});
