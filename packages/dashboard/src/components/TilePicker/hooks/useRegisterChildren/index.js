import { useRef, useCallback } from 'react';
import { getChildNodes, isChildRegistered, insertChildOrderly } from './helpers';

const defaultProps = { selector: 'div[role="option"]' };
export default function useRegisterChildren(props) {
    const { containerRef, selector } = { ...props, ...defaultProps };
    const activeChildren = useRef([]);

    const registerChild = useCallback(
        (childRef, childProps) => {
            if (isChildRegistered(childRef, activeChildren.current)) return;
            const [...nodes] = getChildNodes(containerRef.current, selector);
            const newChildren = insertChildOrderly(
                activeChildren.current,
                {
                    ref: childRef,
                    ...childProps,
                },
                nodes,
            );
            activeChildren.current = newChildren;
        },
        [containerRef, selector],
    );

    const unregisterChild = useCallback((childRef) => {
        if (isChildRegistered(childRef, activeChildren.current)) {
            const newChildren = activeChildren.current.filter((child) => child.ref !== childRef);
            activeChildren.current = newChildren;
        }
    }, []);

    return { activeChildren, registerChild, unregisterChild };
}
