import { setDoc as fbSetDoc } from 'firebase/firestore';
import setDoc from '../setDoc';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        setDoc: jest.fn(),
    };
});

describe('setDoc', () => {
    beforeEach(() => {
        fbSetDoc.mockClear();
    });

    it('should call ref.set', () => {
        const ref = { set: jest.fn() };
        const data = {};
        const options = {};
        setDoc(ref, data, options);
        expect(ref.set).toHaveBeenCalledTimes(1);
        expect(ref.set).toHaveBeenCalledWith(data, options);
    });

    it('should call setDoc from Firebase', () => {
        const ref = {};
        const data = {};
        const options = {};
        setDoc(ref, data, options);
        expect(fbSetDoc).toHaveBeenCalledTimes(1);
        expect(fbSetDoc).toHaveBeenCalledWith(ref, data, options);
    });
});
