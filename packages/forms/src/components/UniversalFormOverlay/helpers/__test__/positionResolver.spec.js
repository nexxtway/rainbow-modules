import positionResolver from '../positionResolver';

describe('positionResolver', () => {
    it('should return position at 0:0 when viewport is smaller than content', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 0,
                    y: 0,
                },
                leftBottomAnchor: {
                    x: 0,
                    y: 0,
                },
                rightUpAnchor: {
                    x: 0,
                    y: 0,
                },
                rightBottomAnchor: {
                    x: 0,
                    y: 0,
                },
            },
            viewport: {
                width: 200,
                height: 200,
            },
            content: {
                height: 220,
                width: 220,
            },
        };
        expect(positionResolver(param)).toEqual({ top: 0, left: 0 });
    });

    it('should return the correct position', () => {
        const param = {
            trigger: {
                leftUpAnchor: {
                    x: 100,
                    y: 100,
                },
                leftBottomAnchor: {
                    x: 0,
                    y: 0,
                },
                rightUpAnchor: {
                    x: 0,
                    y: 0,
                },
                rightBottomAnchor: {
                    x: 0,
                    y: 0,
                },
            },
            viewport: {
                width: 1600,
                height: 900,
            },
            content: {
                height: 100,
                width: 100,
            },
        };
        expect(positionResolver(param)).toEqual({ top: 100, left: 100 });
    });
});
