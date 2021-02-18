import resolverTopLeft from '../resolverTopLeft';

describe('resolverTopLeft', () => {
    it('should return the correct position', () => {
        const meta = {
            trigger: {
                leftUpAnchor: {
                    x: 100,
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
        const position = resolverTopLeft(meta);
        expect(position).toEqual({
            left: 100,
            top: 100,
        });
    });

    it('should return false', () => {
        const meta = {
            trigger: {
                leftUpAnchor: {
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
        const position = resolverTopLeft(meta);
        expect(position).toBe(false);
    });
});
