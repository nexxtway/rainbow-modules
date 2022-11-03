import positionResolver from '../positionResolver';

describe('helper positionResolver', () => {
    it('should return top 0 left 0 when no position can be resolved', () => {
        expect(positionResolver()).toStrictEqual({
            left: 0,
            top: 0,
        });
    });
});
