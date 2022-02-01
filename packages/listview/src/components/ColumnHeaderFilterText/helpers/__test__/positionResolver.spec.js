import resolverCenterHorizontal from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomCenter';
import resolverTopLeft from 'react-rainbow-components/components/InternalOverlay/helpers/resolverTopLeft';
import resolverTopRight from 'react-rainbow-components/components/InternalOverlay/helpers/resolverTopRight';
import resolverBottomLeft from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomLeft';
import resolverBottomRight from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomRight';
import positionResolver from '../positionResolver';

jest.mock('react-rainbow-components/components/InternalOverlay/helpers/resolverBottomCenter', () =>
    jest.fn(() => false),
);
jest.mock('react-rainbow-components/components/InternalOverlay/helpers/resolverTopLeft', () =>
    jest.fn(() => false),
);
jest.mock('react-rainbow-components/components/InternalOverlay/helpers/resolverTopRight', () =>
    jest.fn(() => false),
);
jest.mock('react-rainbow-components/components/InternalOverlay/helpers/resolverBottomLeft', () =>
    jest.fn(() => false),
);
jest.mock('react-rainbow-components/components/InternalOverlay/helpers/resolverBottomRight', () =>
    jest.fn(() => false),
);

describe('helper positionResolver', () => {
    it('should return top 0 left 0 when no position can be resolved', () => {
        expect(positionResolver()).toStrictEqual({
            left: 0,
            top: 0,
        });
    });
    it('should call all function resolver with the param passed', () => {
        expect.assertions(5);
        positionResolver('test');
        expect(resolverBottomRight).toHaveBeenCalledWith('test', 7);
        expect(resolverBottomLeft).toHaveBeenCalledWith('test');
        expect(resolverTopRight).toHaveBeenCalledWith('test');
        expect(resolverTopLeft).toHaveBeenCalledWith('test');
        expect(resolverCenterHorizontal).toHaveBeenCalledWith('test');
    });
    it('must return the correct value if any resolver returns a value', () => {
        resolverBottomRight.mockReturnValue('test');
        expect(positionResolver()).toBe('test');
    });
});
