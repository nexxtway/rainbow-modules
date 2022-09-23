import { collection as fbCollection } from 'firebase/firestore';
import collection from '../collection';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        collection: jest.fn(),
    };
});

describe('collection', () => {
    beforeEach(() => {
        fbCollection.mockClear();
    });

    it('should call ref.collection', () => {
        const ref = { collection: jest.fn() };
        const path = 'test-path';
        collection(ref, path);
        expect(ref.collection).toHaveBeenCalledTimes(1);
        expect(ref.collection).toHaveBeenCalledWith(path);
    });

    it('should call collection from Firebase', () => {
        const ref = {};
        const path = 'test-path';
        collection(ref, path);
        expect(fbCollection).toHaveBeenCalledTimes(1);
        expect(fbCollection).toHaveBeenCalledWith(ref, path);
    });
});
