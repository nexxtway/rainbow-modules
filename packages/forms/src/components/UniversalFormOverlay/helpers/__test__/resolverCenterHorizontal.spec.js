import resolverCenterHorizontal from '../resolverCenterHorizontal';

describe('resolverCenterHorizontal', () => {
    it('should return the correct position when top is negative', () => {
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
                height: 500,
            },
            viewport: {
                width: 1600,
                height: 900,
            },
        };
        const position = resolverCenterHorizontal(meta);
        expect(position).toEqual({
            left: 175,
            top: 0,
        });
    });

    it('should return the correct position when top is positive', () => {
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
                height: 200,
            },
        };
        const position = resolverCenterHorizontal(meta);
        expect(position).toEqual({
            left: 175,
            top: 100,
        });
    });

    it('should return false when left is negative', () => {
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
                width: 500,
                height: 100,
            },
            viewport: {
                width: 50,
                height: 50,
            },
        };
        const position = resolverCenterHorizontal(meta);
        expect(position).toBe(false);
    });

    it('should return false', () => {
        const meta = {
            trigger: {
                leftUpAnchor: {
                    x: 0,
                    y: 0,
                },
                width: 0,
                height: 0,
            },
            content: {
                width: 0,
                height: 0,
            },
            viewport: {
                width: 0,
                height: 0,
            },
        };
        const position = resolverCenterHorizontal(meta);
        expect(position).toBe(false);
    });
});
