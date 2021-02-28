import splitPath from '../splitPath';

describe('splitPath', () => {
    it('should return -1', () => {
        const values = ['users', '/users', '//users', '/users/', '/users//', 'users/'];
        values.forEach((value) => expect(splitPath(value)).toEqual(['users']));
    });
});
