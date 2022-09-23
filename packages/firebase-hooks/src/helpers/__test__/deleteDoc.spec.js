import { deleteDoc as fbDeleteDoc } from 'firebase/firestore';
import deleteDoc from '../deleteDoc';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        deleteDoc: jest.fn(),
    };
});

describe('deleteDoc', () => {
    beforeEach(() => {
        fbDeleteDoc.mockClear();
    });

    it('should call ref.delete', () => {
        const ref = { delete: jest.fn() };
        deleteDoc(ref);
        expect(ref.delete).toHaveBeenCalledTimes(1);
    });

    it('should call deleteDoc from Firebase', () => {
        const ref = {};
        deleteDoc(ref);
        expect(fbDeleteDoc).toHaveBeenCalledTimes(1);
    });
});
