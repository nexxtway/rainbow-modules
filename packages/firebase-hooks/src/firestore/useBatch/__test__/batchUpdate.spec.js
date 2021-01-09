import batchUpdate from '../batchUpdate';

const update = jest.fn();
const commit = jest.fn();
const doc = jest.fn(() => 'doc ref');
const collection = jest.fn(() => ({
    doc,
}));
const db = {
    batch: () => ({
        update,
        commit,
    }),
    collection,
};
const collectionPath = 'books/1234/authors';
const data = [
    { data: { name: 'Speaking Javascript' }, id: 'qwerty' },
    { data: { name: "You don't know JS" }, id: '1234' },
    { data: { name: 'Programming JavaScript Applications' }, id: '5678' },
];

describe('batchUpdate', () => {
    beforeEach(() => {
        update.mockReset();
        commit.mockReset();
        collection.mockReset();
        collection.mockReturnValue({ doc });
        doc.mockReset();
        doc.mockReturnValue('doc ref');
    });
    it('should call db.batch().update with the right data each time', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(db.batch().update).toHaveBeenCalledTimes(3);
        expect(db.batch().update.mock.calls[0][0]).toBe('doc ref');
        expect(db.batch().update.mock.calls[0][1]).toEqual({
            name: 'Speaking Javascript',
        });
        expect(db.batch().update.mock.calls[1][0]).toBe('doc ref');
        expect(db.batch().update.mock.calls[1][1]).toEqual({
            name: "You don't know JS",
        });
        expect(db.batch().update.mock.calls[2][0]).toBe('doc ref');
        expect(db.batch().update.mock.calls[2][1]).toEqual({
            name: 'Programming JavaScript Applications',
        });
    });
    it('should call db.collection with the right collection path each time', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(db.collection.mock.calls[0][0]).toBe('books/1234/authors');
        expect(db.collection.mock.calls[1][0]).toBe('books/1234/authors');
        expect(db.collection.mock.calls[2][0]).toBe('books/1234/authors');
    });
    it('should call db.collection().doc with the right id each time', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(db.collection().doc.mock.calls[0][0]).toBe('qwerty');
        expect(db.collection().doc.mock.calls[1][0]).toBe('1234');
        expect(db.collection().doc.mock.calls[2][0]).toBe('5678');
    });
    it('should call db.batch().commit', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(db.batch().commit).toHaveBeenCalledTimes(1);
    });
});
