import isValidStorageObjectPath from '../isValidStorageObjectPath';

describe('isValidStorageObjectPath', () => {
    it('should return false', () => {
        ['../some', '/some/..', '/../', './some', '/path/to\n/file'].forEach((value) =>
            expect(isValidStorageObjectPath(value)).toBe(false),
        );
    });
    it('should return true', () => {
        [
            '/path/to/file',
            'path/to/{file}',
            '{path}/to/file',
            'path/to/file.json',
        ].forEach((value) => expect(isValidStorageObjectPath(value)).toBe(true));
    });
});
