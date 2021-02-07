import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';

export default function resolverBottomLeft({
    trigger,
    content,
    viewport,
}: PositionResolverOpts): Position | boolean {
    const left = trigger.leftBottomAnchor.x;
    const top = trigger.leftBottomAnchor.y - content.height;
    if (left + content.width <= viewport.width && top > 0) {
        return {
            left,
            top,
        };
    }
    return false;
}
