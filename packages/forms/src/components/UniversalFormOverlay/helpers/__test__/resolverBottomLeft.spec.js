import resolverBottomLeft from '../resolverBottomLeft';

describe('resolverBottomLeft', () => {
    it('should return the correct position', () => {
        const meta = {
            trigger: {
                leftBottomAnchor: {
                    x: 0,
                    y: 200,
                },
            },
            content: {
                width: 100,
                height: 100,
            },
            viewport: {
                width: 1600,
                height: 900,
            },
        };
        const position = resolverBottomLeft(meta);
        expect(position).toEqual({
            left: 0,
            top: 100,
        });
    });

    it('should return false', () => {
        const meta = {
            trigger: {
                leftBottomAnchor: {
                    x: 0,
                    y: 200,
                },
            },
            content: {
                width: 100,
                height: 100,
            },
            viewport: {
                width: 50,
                height: 50,
            },
        };
        const position = resolverBottomLeft(meta);
        expect(position).toBe(false);
    });
});
