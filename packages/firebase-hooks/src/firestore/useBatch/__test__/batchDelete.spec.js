import { collection, doc, WriteBatch } from 'firebase/firestore';
import batchDelete from '../batchDelete';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    originalModule.WriteBatch.delete = jest.fn();
    originalModule.WriteBatch.commit = jest.fn();

    return {
        __esModule: true,
        ...originalModule,
        collection: jest.fn(),
        doc: jest.fn(() => 'doc ref'),
        writeBatch: () => ({
            delete: originalModule.WriteBatch.delete,
            commit: originalModule.WriteBatch.commit,
        }),
    };
});
const db = {};

const collectionPath = 'books/1234/authors';
const data = [{ id: 'qwerty' }, { id: '1234' }, { id: '5678' }];

describe('batchUpdate', () => {
    beforeEach(() => {
        WriteBatch.delete.mockReset();
        WriteBatch.commit.mockReset();
        collection.mockReset();
        collection.mockReturnValue({ doc });
        doc.mockReset();
        doc.mockReturnValue('doc ref');
    });
    it('should call WriteBatch.delete with the right data each time', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(WriteBatch.delete).toHaveBeenCalledTimes(3);
        expect(WriteBatch.delete.mock.calls[0][0]).toBe('doc ref');
        expect(WriteBatch.delete.mock.calls[1][0]).toBe('doc ref');
        expect(WriteBatch.delete.mock.calls[2][0]).toBe('doc ref');
    });
    it('should call db.collection with the right collection path each time', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(collection.mock.calls[0][1]).toBe('books/1234/authors');
        expect(collection.mock.calls[1][1]).toBe('books/1234/authors');
        expect(collection.mock.calls[2][1]).toBe('books/1234/authors');
    });
    it('should call db.collection().doc with the right id each time', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(collection().doc.mock.calls[0][1]).toBe('qwerty');
        expect(collection().doc.mock.calls[1][1]).toBe('1234');
        expect(collection().doc.mock.calls[2][1]).toBe('5678');
    });
    it('should call WriteBatch.commit', () => {
        batchDelete({ db, collection: collectionPath, data });
        expect(WriteBatch.commit).toHaveBeenCalledTimes(1);
    });
});
