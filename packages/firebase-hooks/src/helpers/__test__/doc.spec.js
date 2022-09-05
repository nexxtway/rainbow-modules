import { doc as fbDoc } from 'firebase/firestore';
import doc from '../doc';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        doc: jest.fn(),
    };
});

describe('doc', () => {
    beforeEach(() => {
        fbDoc.mockClear();
    });

    it('should call ref.doc', () => {
        const ref = { doc: jest.fn() };
        const path = 'test-path';
        doc(ref, path);
        expect(ref.doc).toHaveBeenCalledTimes(1);
        expect(ref.doc).toHaveBeenCalledWith(path);
    });

    it('should call doc from Firebase', () => {
        const ref = {};
        const path = 'test-path';
        doc(ref, path);
        expect(fbDoc).toHaveBeenCalledTimes(1);
        expect(fbDoc).toHaveBeenCalledWith(ref, path);
    });
});
