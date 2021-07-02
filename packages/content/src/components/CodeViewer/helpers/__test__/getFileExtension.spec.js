import getFileExtension from '../getFileExtension';

describe('getFileExtension', () => {
    it('should return the right extension', () => {
        const names = ['index.js', 'firebase.config.json', '.gitignore', 'noExtension'];
        const extensions = ['js', 'json', 'unknown', 'unknown'];
        names.forEach((name, index) => expect(getFileExtension(name)).toBe(extensions[index]));
    });
});
