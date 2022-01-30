import getNodeText from '../getNodeText';

describe('helper getNodeText', () => {
    it('should return empty text when node is not right value', () => {
        const nodes = [undefined, null, {}, [], new Date()];
        nodes.forEach((value) => {
            expect(getNodeText(value)).toBe('');
        });
    });
    it('should return text when node is right value', () => {
        const nodes = ['node', ['node'], { props: { children: ['node'] } }];
        nodes.forEach((value) => {
            expect(getNodeText(value)).toBe('node');
        });
        expect(getNodeText(123)).toBe(123);
    });
});
