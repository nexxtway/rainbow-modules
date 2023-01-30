import { collection, doc, WriteBatch } from 'firebase/firestore';
import batchSet from '../batchSet';

jest.mock('firebase/firestore', () => {
    const originalModule = jest.requireActual('firebase/firestore');
    originalModule.WriteBatch.set = jest.fn();
    originalModule.WriteBatch.commit = jest.fn();

    return {
        __esModule: true,
        ...originalModule,
        collection: jest.fn(),
        doc: jest.fn(() => 'doc ref'),
        writeBatch: () => ({
            set: originalModule.WriteBatch.set,
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
        WriteBatch.set.mockReset();
        WriteBatch.commit.mockReset();
        collection.mockReset();
        collection.mockReturnValue({ doc });
        doc.mockReset();
        doc.mockReturnValue('doc ref');
    });
    it('should call WriteBatch.set with the right data each time', () => {
        const options = 'foo';
        batchSet({ db, collection: collectionPath, data, options });
        expect(WriteBatch.set).toHaveBeenCalledTimes(3);
        expect(WriteBatch.set.mock.calls[0][0]).toBe('doc ref');
        expect(WriteBatch.set.mock.calls[0][1]).toEqual({
            name: 'Speaking Javascript',
        });
        expect(WriteBatch.set.mock.calls[0][2]).toBe('foo');
        expect(WriteBatch.set.mock.calls[1][0]).toBe('doc ref');
        expect(WriteBatch.set.mock.calls[1][1]).toEqual({
            name: "You don't know JS",
        });
        expect(WriteBatch.set.mock.calls[1][2]).toBe('foo');
        expect(WriteBatch.set.mock.calls[2][0]).toBe('doc ref');
        expect(WriteBatch.set.mock.calls[2][1]).toEqual({
            name: 'Programming JavaScript Applications',
        });
        expect(WriteBatch.set.mock.calls[2][2]).toBe('foo');
    });
    it('should call db.collection with the right collection path each time', () => {
        batchSet({ db, collection: collectionPath, data });
        expect(collection.mock.calls[0][1]).toBe('books/1234/authors');
        expect(collection.mock.calls[1][1]).toBe('books/1234/authors');
        expect(collection.mock.calls[2][1]).toBe('books/1234/authors');
    });
    it('should call db.collection().doc with the right id each time', () => {
        batchSet({ db, collection: collectionPath, data });
        expect(collection().doc.mock.calls[0][1]).toBe('qwerty');
        expect(collection().doc.mock.calls[1][1]).toBe('1234');
        expect(collection().doc.mock.calls[2][1]).toBe('5678');
    });
    it('should call WriteBatch.commit', () => {
        batchSet({ db, collection: collectionPath, data });
        expect(WriteBatch.commit).toHaveBeenCalledTimes(1);
    });
});
