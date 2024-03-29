import isFirestorePath from '../isFirestorePath';

describe('isFirestorePath', () => {
    it('shoud return true', () => {
        [
            '/users',
            '/users/marie',
            '/users/{username}/addresses',
            '/users/{username}/addresses/{addressId}',
            '/users/{username}/addresses/home',
            '/{collectionName}/{documentId}',
            '/collection name/document id',
            '/collection.name/document.id',
            'users',
            'users/{username}',
            'users/{username}/addresses',
            'users/{username}/addresses/{addressId}',
            'users/{username}/addresses/home',
            '{collectionName}/{documentId}',
            'collection name/document id',
            'collection.name/document.id',
        ].forEach((path) => {
            expect(isFirestorePath(path)).toBe(true);
        });
    });
    it('shoud return false', () => {
        [
            'users/[username]/addresses',
            '/users/{username',
            '/users/username}',
            '//users',
            '/users//marie',
            '/users//{username}/',
            '/users/[username]/',
            '/users/[username]',
            '/[collectionName]/[documentId]',
            '/users/',
            'users/',
            'users/{username}/',
            'users/[username]',
            '[collectionName]/[documentId]',
            '/.collection/.doc',
            '__.*__',
            '/collection/__.*__',
        ].forEach((path) => {
            expect(isFirestorePath(path)).toBe(false);
        });
    });
});
