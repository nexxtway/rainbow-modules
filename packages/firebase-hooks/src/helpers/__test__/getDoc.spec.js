import { getDoc as fbGetDoc } from 'firebase/firestore';
import getDoc from '../getDoc';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        getDoc: jest.fn(),
    };
});

describe('getDoc', () => {
    beforeEach(() => {
        fbGetDoc.mockClear();
    });

    it('should call ref.get', () => {
        const ref = { get: jest.fn() };
        getDoc(ref);
        expect(ref.get).toHaveBeenCalledTimes(1);
    });

    it('should call getDoc from Firebase', () => {
        const ref = {};
        getDoc(ref);
        expect(fbGetDoc).toHaveBeenCalledTimes(1);
    });
});
