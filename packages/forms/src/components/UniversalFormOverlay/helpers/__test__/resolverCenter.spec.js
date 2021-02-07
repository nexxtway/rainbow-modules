import resolverCenter from '../resolverCenter';

describe('resolverCenter', () => {
    it('should return the correct position', () => {
        const meta = {
            trigger: {
                leftUpAnchor: {
                    x: 200,
                    y: 200,
                },
                width: 50,
                height: 50,
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
        const position = resolverCenter(meta);
        expect(position).toEqual({
            left: 175,
            top: 175,
        });
    });

    it('should return false', () => {
        const meta = {
            trigger: {
                leftUpAnchor: {
                    x: 200,
                    y: 200,
                },
                width: 50,
                height: 50,
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
        const position = resolverCenter(meta);
        expect(position).toBe(false);
    });
});
