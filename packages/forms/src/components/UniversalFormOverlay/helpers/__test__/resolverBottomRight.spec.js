import resolverBottomRight from '../resolverBottomRight';

describe('resolverBottomRight', () => {
    it('should return the correct position', () => {
        const meta = {
            trigger: {
                rightBottomAnchor: {
                    x: 200,
                    y: 200,
                },
            },
            content: {
                width: 100,
                height: 100,
            },
        };
        const position = resolverBottomRight(meta);
        expect(position).toEqual({
            left: 100,
            top: 100,
        });
    });

    it('should return false', () => {
        const meta = {
            trigger: {
                rightBottomAnchor: {
                    x: 50,
                    y: 50,
                },
            },
            content: {
                width: 100,
                height: 100,
            },
        };
        const position = resolverBottomRight(meta);
        expect(position).toBe(false);
    });
});
