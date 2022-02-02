import getHeaderText from '../getHeaderText';

describe('helper getHeaderText', () => {
    it('should return empty text when node is not right value', () => {
        const nodes = [undefined, null, {}, [], 124, new Date()];
        nodes.forEach((value) => {
            expect(getHeaderText(value)).toBe('');
        });
    });
    it('should return text when node is right value', () => {
        const nodes = ['node', ['node'], { props: { children: ['node'] } }];
        nodes.forEach((value) => {
            expect(getHeaderText(value)).toBe('node');
        });
    });
});
