import { writeBatch as fbWriteBatch } from 'firebase/firestore';
import writeBatch from '../writeBatch';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        writeBatch: jest.fn(),
    };
});

describe('writeBatch', () => {
    beforeEach(() => {
        fbWriteBatch.mockClear();
    });

    it('should call ref.batch', () => {
        const ref = { batch: jest.fn() };
        writeBatch(ref);
        expect(ref.batch).toHaveBeenCalledTimes(1);
    });

    it('should call writeBatch from Firebase', () => {
        const ref = {};
        writeBatch(ref);
        expect(fbWriteBatch).toHaveBeenCalledTimes(1);
        expect(fbWriteBatch).toHaveBeenCalledWith(ref);
    });
});
