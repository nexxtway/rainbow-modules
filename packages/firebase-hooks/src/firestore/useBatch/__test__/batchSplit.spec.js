import batchSplit from '../batchSplit';

const db = { collection: () => {} };
const collection = 'books';

describe('batchSplit', () => {
    it('should call action with the right data when data length is less than 500', () => {
        const data = [{ name: 'Speaking Javascript' }, { name: "You don't know JS" }];
        const action = jest.fn();
        batchSplit({ db, collection, data, action });
        expect(action).toHaveBeenCalledTimes(1);
        expect(action).toHaveBeenCalledWith({
            db,
            collection: 'books',
            data: [{ name: 'Speaking Javascript' }, { name: "You don't know JS" }],
        });
    });
    it('should call action 3 times with batch splits of 500 items', () => {
        const data = Array(1300).fill({});
        const action = jest.fn();
        batchSplit({ db, collection, data, action });
        expect(action).toHaveBeenCalledTimes(3);
        expect(action.mock.calls[0][0]).toEqual({
            db,
            collection: 'books',
            data: expect.any(Array),
        });
        expect(action.mock.calls[0][0].data.length).toBe(500);
        expect(action.mock.calls[1][0]).toEqual({
            db,
            collection: 'books',
            data: expect.any(Array),
        });
        expect(action.mock.calls[1][0].data.length).toBe(500);
        expect(action.mock.calls[2][0]).toEqual({
            db,
            collection: 'books',
            data: expect.any(Array),
        });
        expect(action.mock.calls[2][0].data.length).toBe(300);
    });
});
