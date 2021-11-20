import splitPath from '../splitPath';

describe('splitPath', () => {
    it('should return empty array', () => {
        const values = [null, undefined, ''];
        values.forEach((value) => expect(splitPath(value)).toEqual([]));
    });
    it('should return right path parts', () => {
        const values = ['users', '/users', '//users', '/users/', '/users//', 'users/'];
        values.forEach((value) => expect(splitPath(value)).toEqual(['users']));
    });
});
