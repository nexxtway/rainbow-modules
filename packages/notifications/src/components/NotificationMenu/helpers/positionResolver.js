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

function resolverUpRight(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightUpAnchor.x - content.width >= 0 &&
        trigger.rightUpAnchor.y - margin - content.height >= 0
    ) {
        return {
            bottom: viewport.height - trigger.leftUpAnchor.y + margin,
            left: trigger.rightUpAnchor.x - content.width,
        };
    }
    return false;
}

function resolverUpLeft(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.leftUpAnchor.x + content.width <= viewport.width &&
        trigger.leftUpAnchor.y - margin - content.height >= 0
    ) {
        return {
            bottom: viewport.height - trigger.leftUpAnchor.y + margin,
            left: trigger.leftBottomAnchor.x,
        };
    }
    return false;
}

const DEFAULT_MARGIN = 5;
const resolvers = [resolverBottomRight, resolverBottomLeft, resolverUpRight, resolverUpLeft];

const positionResolver = (opts) => {
    let pos;
    resolvers.some((resolver) => {
        const ret = resolver(opts, DEFAULT_MARGIN);
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
        top: 0,
        left: 0,
    };
};

export default positionResolver;
