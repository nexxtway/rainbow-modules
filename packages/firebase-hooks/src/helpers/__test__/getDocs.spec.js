import { getDocs as fbGetDocs } from 'firebase/firestore';
import getDocs from '../getDocs';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        getDocs: jest.fn(),
    };
});

describe('getDocs', () => {
    beforeEach(() => {
        fbGetDocs.mockClear();
    });

    it('should call ref.get', () => {
        const ref = { get: jest.fn() };
        getDocs(ref);
        expect(ref.get).toHaveBeenCalledTimes(1);
    });

    it('should call getDocs from Firebase', () => {
        const ref = {};
        getDocs(ref);
        expect(fbGetDocs).toHaveBeenCalledTimes(1);
    });
});
