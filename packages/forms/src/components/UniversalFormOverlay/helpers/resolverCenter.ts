import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';

export default function resolverCenter({
    trigger,
    content,
    viewport,
}: PositionResolverOpts): Position | boolean {
    const left = trigger.leftUpAnchor.x + trigger.width / 2 - content.width / 2;
    const top = trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2;
    if (
        left > 0 &&
        left + content.width <= viewport.width &&
        top > 0 &&
        top + content.height <= viewport.height
    ) {
        return {
            left,
            top,
        };
    }
    return false;
}
