import { query as fbQuery } from 'firebase/firestore';
import query from '../query';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    return {
        __esModule: true,
        ...originalModule,
        query: jest.fn(),
    };
});

describe('query', () => {
    beforeEach(() => {
        fbQuery.mockClear();
    });

    it('should call ref.query', () => {
        const ref = { where: jest.fn() };
        const result = query(ref);
        expect(result).toBe(ref);
    });

    it('should call query from Firebase', () => {
        const ref = {};
        query(ref);
        expect(fbQuery).toHaveBeenCalledTimes(1);
        expect(fbQuery).toHaveBeenCalledWith(ref);
    });
});
