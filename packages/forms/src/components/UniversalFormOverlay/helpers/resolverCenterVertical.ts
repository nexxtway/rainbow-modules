import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';

export default function resolverCenterVertical({
    trigger,
    content,
    viewport,
}: PositionResolverOpts): Position | boolean {
    const left = trigger.leftUpAnchor.x + trigger.width / 2 - content.width / 2;
    const top = trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2;
    if (top < 0 || top + content.height > viewport.height) {
        return false;
    }
    if (left < 0) {
        return {
            left: 0,
            top,
        };
    }
    if (left + content.width > viewport.width && viewport.width - content.width >= 0) {
        return {
            left: viewport.width - content.width,
            top,
        };
    }
    return false;
}
