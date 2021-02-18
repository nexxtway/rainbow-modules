import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';

export default function resolverTopLeft({
    trigger,
    content,
    viewport,
}: PositionResolverOpts): Position | boolean {
    const left = trigger.leftUpAnchor.x;
    const top = trigger.leftUpAnchor.y;
    if (left + content.width <= viewport.width && top + content.height <= viewport.height) {
        return {
            left,
            top,
        };
    }
    return false;
}
