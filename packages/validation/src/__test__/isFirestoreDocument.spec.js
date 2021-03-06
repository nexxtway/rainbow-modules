import isFirestoreDocument from '../isFirestoreDocument';

describe('isFirestoreDocumentPath', () => {
    it('shoud return true', () => {
        [
            '/users/marie',
            '/users/{username}/addresses/home',
            '/users/{username}/addresses/{addressId}',
            'users/{username}',
            'users/{username}/addresses/home',
            'users/{username}/addresses/{addressId}',
        ].forEach((path) => {
            expect(isFirestoreDocument(path)).toBe(true);
        });
    });
    it('shoud return false', () => {
        [
            '/users',
            '/users/{username}/addresses',
            'users/{username}/addresses',
            'users',
            'users/[username]/addresses',
            '//users',
            '/users//marie',
            '/users//{username}/',
            '/users/[username]/',
            '/users/[username]',
            '/users/',
            'users/',
            'users/{username}/',
            'users/[username]',
        ].forEach((path) => {
            expect(isFirestoreDocument(path)).toBe(false);
        });
    });
});
