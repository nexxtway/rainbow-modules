import resolverTopRight from '../resolverTopRight';

describe('resolverTopRight', () => {
    it('should return the correct position', () => {
        const meta = {
            trigger: {
                rightUpAnchor: {
                    x: 200,
                    y: 100,
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
        const position = resolverTopRight(meta);
        expect(position).toEqual({
            left: 100,
            top: 100,
        });
    });

    it('should return false', () => {
        const meta = {
            trigger: {
                rightUpAnchor: {
                    x: 0,
                    y: 0,
                },
            },
            content: {
                width: 10,
                height: 0,
            },
            viewport: {
                width: 0,
                height: 0,
            },
        };
        const position = resolverTopRight(meta);
        expect(position).toBe(false);
    });
});
