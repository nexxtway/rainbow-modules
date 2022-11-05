function resolverCenterHorizontal(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightBottomAnchor.x - trigger.width / 2 - content.width / 2 >= 0 &&
        trigger.leftBottomAnchor.x + trigger.width / 2 + content.width / 2 <= viewport.width &&
        trigger.leftBottomAnchor.y + margin + content.height <= viewport.height
    ) {
        return {
            top: trigger.leftBottomAnchor.y + margin,
            left: trigger.rightBottomAnchor.x - content.width / 2 - trigger.width / 2,
        };
    }
    return false;
}

function resolverTopLeft(opts, margin = 0) {
    const { trigger, content } = opts;
    if (trigger.leftUpAnchor.x - margin - content.width >= 0) {
        return {
            top: 0,
            left: trigger.leftUpAnchor.x - margin - content.width,
        };
    }
    return false;
}

function resolverTopRight(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (trigger.rightUpAnchor.x + margin + content.width <= viewport.width) {
        return {
            top: 0,
            left: trigger.rightUpAnchor.x + margin,
        };
    }
    return false;
}

function resolverBottomLeft(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.leftBottomAnchor.x + content.width <= viewport.width &&
        trigger.leftBottomAnchor.y + margin + content.height <= viewport.height
    ) {
        return {
            top: trigger.leftBottomAnchor.y + margin,
            left: trigger.leftBottomAnchor.x,
        };
    }
    return false;
}

function resolverBottomRight(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightBottomAnchor.x - content.width >= 0 &&
        trigger.rightBottomAnchor.y + margin + content.height <= viewport.height
    ) {
        return {
            top: trigger.leftBottomAnchor.y + margin,
            left: trigger.rightBottomAnchor.x - content.width,
        };
    }
    return false;
}

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
