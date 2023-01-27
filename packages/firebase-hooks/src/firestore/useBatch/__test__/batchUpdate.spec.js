import { collection, doc, WriteBatch } from 'firebase/firestore';
import batchUpdate from '../batchUpdate';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    originalModule.WriteBatch.update = jest.fn();
    originalModule.WriteBatch.commit = jest.fn();

    return {
        __esModule: true,
        ...originalModule,
        collection: jest.fn(),
        doc: jest.fn(() => 'doc ref'),
        writeBatch: () => ({
            update: originalModule.WriteBatch.update,
            commit: originalModule.WriteBatch.commit,
        }),
    };
});
const db = {};

const collectionPath = 'books/1234/authors';
const data = [
    { data: { name: 'Speaking Javascript' }, id: 'qwerty' },
    { data: { name: "You don't know JS" }, id: '1234' },
    { data: { name: 'Programming JavaScript Applications' }, id: '5678' },
];

describe('batchUpdate', () => {
    beforeEach(() => {
        WriteBatch.update.mockReset();
        WriteBatch.commit.mockReset();
        collection.mockReset();
        collection.mockReturnValue({ doc });
        doc.mockReset();
        doc.mockReturnValue('doc ref');
    });
    it('should call WriteBatch.update with the right data each time', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(WriteBatch.update).toHaveBeenCalledTimes(3);
        expect(WriteBatch.update.mock.calls[0][0]).toBe('doc ref');
        expect(WriteBatch.update.mock.calls[0][1]).toEqual({
            name: 'Speaking Javascript',
        });
        expect(WriteBatch.update.mock.calls[1][0]).toBe('doc ref');
        expect(WriteBatch.update.mock.calls[1][1]).toEqual({
            name: "You don't know JS",
        });
        expect(WriteBatch.update.mock.calls[2][0]).toBe('doc ref');
        expect(WriteBatch.update.mock.calls[2][1]).toEqual({
            name: 'Programming JavaScript Applications',
        });
    });
    it('should call db.collection with the right collection path each time', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(collection.mock.calls[0][1]).toBe('books/1234/authors');
        expect(collection.mock.calls[1][1]).toBe('books/1234/authors');
        expect(collection.mock.calls[2][1]).toBe('books/1234/authors');
    });
    it('should call db.collection().doc with the right id each time', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(collection().doc.mock.calls[0][1]).toBe('qwerty');
        expect(collection().doc.mock.calls[1][1]).toBe('1234');
        expect(collection().doc.mock.calls[2][1]).toBe('5678');
    });
    it('should call WriteBatch.commit', () => {
        batchUpdate({ db, collection: collectionPath, data });
        expect(WriteBatch.commit).toHaveBeenCalledTimes(1);
    });
});
