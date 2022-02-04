import resolverCenterHorizontal from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomCenter';
import resolverTopLeft from 'react-rainbow-components/components/InternalOverlay/helpers/resolverTopLeft';
import resolverTopRight from 'react-rainbow-components/components/InternalOverlay/helpers/resolverTopRight';
import resolverBottomLeft from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomLeft';
import resolverBottomRight from 'react-rainbow-components/components/InternalOverlay/helpers/resolverBottomRight';

const resolvers = [
    (opts) => resolverBottomRight(opts, 7),
    resolverBottomLeft,
    resolverTopRight,
    resolverTopLeft,
    resolverCenterHorizontal,
];

export default function positionResolver(opts) {
    let pos;
    resolvers.some((resolver) => {
        const ret = resolver(opts);
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
        left: 0,
        top: 0,
    };
}
