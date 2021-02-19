import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';
import resolverCenter from './resolverCenter';
import resolverCenterHorizontal from './resolverCenterHorizontal';
import resolverCenterVertical from './resolverCenterVertical';
import resolverTopLeft from './resolverTopLeft';
import resolverTopRight from './resolverTopRight';
import resolverBottomLeft from './resolverBottomLeft';
import resolverBottomRight from './resolverBottomRight';

const resolvers: Array<(opts: PositionResolverOpts) => Position | boolean> = [
    resolverCenter,
    resolverCenterVertical,
    resolverCenterHorizontal,
    resolverTopLeft,
    resolverTopRight,
    resolverBottomLeft,
    resolverBottomRight,
];

export default function positionResolver(opts: PositionResolverOpts): Position {
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
