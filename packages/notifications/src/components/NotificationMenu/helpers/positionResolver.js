import resolverBottomRight from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomRight';
import resolverBottomLeft from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomLeft';
import resolverUpRight from 'react-rainbow-components/components/InternalOverlay/helpers/resolverUpRight';
import resolverUpLeft from 'react-rainbow-components/components/InternalOverlay/helpers/resolverUpLeft';

const DEFAULT_MARGIN = 5;
const resolvers = [resolverBottomRight, resolverBottomLeft, resolverUpRight, resolverUpLeft];

const positionResolver = (opts) => {
    let pos;
    resolvers.some((resolver) => {
        const ret = resolver(opts, DEFAULT_MARGIN);
        if (ret) {
            pos = ret;
            return true;
        }
        return false;
    });
    if (pos) {
        return pos;
    }
    return {
        top: 0,
        left: 0,
    };
};

export default positionResolver;
