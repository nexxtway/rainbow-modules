import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';

export default function resolverTopRight({
    trigger,
    content,
    viewport,
}: PositionResolverOpts): Position | boolean {
    const left = trigger.rightUpAnchor.x - content.width;
    const top = trigger.rightUpAnchor.y;
    if (left > 0 && top + content.height <= viewport.height) {
        return {
            left,
            top,
        };
    }
    return false;
}
