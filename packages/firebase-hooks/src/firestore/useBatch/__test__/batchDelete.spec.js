import batchDelete from '../batchDelete';

const deleteMock = jest.fn();
const commit = jest.fn();
const doc = jest.fn(() => 'doc ref');
const collection = jest.fn(() => ({
    doc,
}));
const db = {
    batch: () => ({
        delete: deleteMock,
        commit,
    }),
    collection,
};
const collectionPath = 'books/1234/authors';
const data = [{ id: 'qwerty' }, { id: '1234' }, { id: '5678' }];

describe('batchUpdate', () => {
    beforeEach(() => {
        deleteMock.mockReset();
        commit.mockReset();
        collection.mockReset();
        collection.mockReturnValue({ doc });
        doc.mockReset();
        doc.mockReturnValue('doc ref');
    });
    it('should call db.batch().delete with the right data each time', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(db.batch().delete).toHaveBeenCalledTimes(3);
        expect(db.batch().delete.mock.calls[0][0]).toBe('doc ref');
        expect(db.batch().delete.mock.calls[1][0]).toBe('doc ref');
        expect(db.batch().delete.mock.calls[2][0]).toBe('doc ref');
    });
    it('should call db.collection with the right collection path each time', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(db.collection.mock.calls[0][0]).toBe('books/1234/authors');
        expect(db.collection.mock.calls[1][0]).toBe('books/1234/authors');
        expect(db.collection.mock.calls[2][0]).toBe('books/1234/authors');
    });
    it('should call db.collection().doc with the right id each time', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(db.collection().doc.mock.calls[0][0]).toBe('qwerty');
        expect(db.collection().doc.mock.calls[1][0]).toBe('1234');
        expect(db.collection().doc.mock.calls[2][0]).toBe('5678');
    });
    it('should call db.batch().commit', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(db.batch().commit).toHaveBeenCalledTimes(1);
    });
});
