import batchAdd from '../batchAdd';

const set = jest.fn();
const commit = jest.fn();
const doc = jest.fn(() => 'doc ref');
const collection = jest.fn(() => ({
    doc,
}));
const db = {
    batch: () => ({
        set,
        commit,
    }),
    collection,
};
const collectionPath = 'books/1234/authors';
const data = [
    { name: 'Speaking Javascript' },
    { name: "You don't know JS" },
    { name: 'Programming JavaScript Applications' },
];

describe('batchAdd', () => {
    beforeEach(() => {
        set.mockReset();
        commit.mockReset();
        collection.mockReset();
        collection.mockReturnValue({ doc });
        doc.mockReset();
        doc.mockReturnValue('doc ref');
    });
    it('should call db.batch().set with the right data each time', () => {
        batchAdd({ db, collection: collectionPath, data });
        expect(db.batch().set).toHaveBeenCalledTimes(3);
        expect(db.batch().set.mock.calls[0][0]).toBe('doc ref');
        expect(db.batch().set.mock.calls[0][1]).toEqual({ name: 'Speaking Javascript' });
        expect(db.batch().set.mock.calls[1][0]).toBe('doc ref');
        expect(db.batch().set.mock.calls[1][1]).toEqual({ name: "You don't know JS" });
        expect(db.batch().set.mock.calls[2][0]).toBe('doc ref');
        expect(db.batch().set.mock.calls[2][1]).toEqual({
            name: 'Programming JavaScript Applications',
        });
    });
    it('should call db.collection with the right collection path each time', () => {
        batchAdd({ db, collection: collectionPath, data });
        expect(db.collection.mock.calls[0][0]).toBe('books/1234/authors');
        expect(db.collection.mock.calls[1][0]).toBe('books/1234/authors');
        expect(db.collection.mock.calls[2][0]).toBe('books/1234/authors');
    });
    it('should call db.batch().commit', () => {
        batchAdd({ db, collection: collectionPath, data });
        expect(db.batch().commit).toHaveBeenCalledTimes(1);
    });
});
