import { addDoc as fbAddDoc } from 'firebase/firestore';
import addDoc from '../addDoc';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        addDoc: jest.fn(),
    };
});

describe('addDoc', () => {
    beforeEach(() => {
        fbAddDoc.mockClear();
    });

    it('should call ref.add', () => {
        const ref = { add: jest.fn() };
        const data = {};
        addDoc(ref, data);
        expect(ref.add).toHaveBeenCalledTimes(1);
        expect(ref.add).toHaveBeenCalledWith(data);
    });

    it('should call addDoc from Firebase', () => {
        const ref = {};
        const data = {};
        addDoc(ref, data);
        expect(fbAddDoc).toHaveBeenCalledTimes(1);
        expect(fbAddDoc).toHaveBeenCalledWith(ref, data);
    });
});
