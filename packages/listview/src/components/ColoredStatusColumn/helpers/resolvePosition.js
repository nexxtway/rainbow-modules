import { InternalOverlay } from 'react-rainbow-components';

const DEFAULT_MARGIN = 5;

function getDesiredPosition(options, alignment, margin) {
    const {
        trigger: {
            leftUpAnchor,
            leftBottomAnchor,
            rightUpAnchor,
            rightBottomAnchor,
            width: triggerWidth,
        },
        content: { width: contentWidth, height: contentHeight },
    } = options;
    if (alignment === 'right') {
        return {
            left: rightBottomAnchor.x - contentWidth,
            top: rightBottomAnchor.y + margin,
        };
    }
    if (alignment === 'bottom') {
        return {
            left: leftUpAnchor.x + (triggerWidth - contentWidth) / 2,
            top: leftUpAnchor.y - contentHeight - margin,
        };
    }
    if (alignment === 'center') {
        return {
            left: leftBottomAnchor.x + (triggerWidth - contentWidth) / 2,
            top: leftBottomAnchor.y + margin,
        };
    }
    if (alignment === 'bottom-right') {
        return {
            left: rightUpAnchor.x - contentWidth,
            top: leftUpAnchor.y - contentHeight - margin,
        };
    }
    if (alignment === 'bottom-left') {
        return {
            left: leftUpAnchor.x,
            top: leftUpAnchor.y - contentHeight - margin,
        };
    }
    return {
        left: leftBottomAnchor.x,
        top: leftBottomAnchor.y + margin,
    };
}

export default function resolvePosition(options, alignment) {
    const defaultPosition = InternalOverlay.defaultPositionResolver(options);
    const desiredPosition = getDesiredPosition(options, alignment, DEFAULT_MARGIN);
    const {
        viewport: { width: viewportWidth, height: viewportHeight },
        content: { width: contentWidth, height: contentHeight },
    } = options;

    if (
        viewportWidth - (desiredPosition.left + contentWidth) >= 0 &&
        viewportHeight - (desiredPosition.top + contentHeight) >= 0
    ) {
        return desiredPosition;
    }

    return defaultPosition;
}
