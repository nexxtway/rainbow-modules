import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';

export default function resolverBottomRight({
    trigger,
    content,
}: PositionResolverOpts): Position | boolean {
    const left = trigger.rightBottomAnchor.x - content.width;
    const top = trigger.rightBottomAnchor.y - content.height;
    if (left > 0 && top > 0) {
        return {
            left,
            top,
        };
    }
    return false;
}
