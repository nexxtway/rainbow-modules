import { updateDoc as fbUpdateDoc } from 'firebase/firestore';
import updateDoc from '../updateDoc';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        updateDoc: jest.fn(),
    };
});

describe('updateDoc', () => {
    beforeEach(() => {
        fbUpdateDoc.mockClear();
    });

    it('should call ref.update', () => {
        const ref = { update: jest.fn() };
        const data = {};
        const options = {};
        updateDoc(ref, data, options);
        expect(ref.update).toHaveBeenCalledTimes(1);
        expect(ref.update).toHaveBeenCalledWith(data, options);
    });

    it('should call updateDoc from Firebase', () => {
        const ref = {};
        const data = {};
        const options = {};
        updateDoc(ref, data, options);
        expect(fbUpdateDoc).toHaveBeenCalledTimes(1);
        expect(fbUpdateDoc).toHaveBeenCalledWith(ref, data, options);
    });
});
