import isFirestoreCollection from '../isFirestoreCollection';

describe('isFirestoreCollection', () => {
    it('shoud return true', () => {
        ['/users', '/users/{username}/addresses', 'users', 'users/{username}/addresses'].forEach(
            (path) => {
                expect(isFirestoreCollection(path)).toBe(true);
            },
        );
    });
    it('shoud return false', () => {
        [
            '/users/marie',
            '/users/{username}/addresses/{addressId}',
            '/users/{username}/addresses/home',
            'users/{username}',
            'users/{username}/addresses/{addressId}',
            'users/{username}/addresses/home',
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
            expect(isFirestoreCollection(path)).toBe(false);
        });
    });
});
