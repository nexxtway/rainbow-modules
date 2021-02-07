import {
    Position,
    PositionResolverOpts,
} from 'react-rainbow-components/components/InternalOverlay';

export default function resolverCenterHorizontal({
    trigger,
    content,
    viewport,
}: PositionResolverOpts): Position | boolean {
    const left = trigger.leftUpAnchor.x + trigger.width / 2 - content.width / 2;
    const top = trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2;
    if (left < 0 || left + content.width > viewport.width) {
        return false;
    }
    if (top < 0) {
        return {
            left,
            top: 0,
        };
    }
    if (top + content.height > viewport.height && viewport.height - content.height >= 0) {
        return {
            left,
            top: viewport.height - content.height,
        };
    }
    return false;
}
