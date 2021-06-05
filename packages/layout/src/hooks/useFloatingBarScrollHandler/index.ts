import React, { useCallback, useState } from 'react';
import { Params, ReturnType } from './types';

const useFloatingBarScrollHandler = ({ scrollTop = 50 }: Params): ReturnType => {
    const [showFloatingBar, setShowFloatingBar] = useState<boolean>(false);
    const handleScrollEvent = useCallback(
        (event: React.UIEvent<HTMLElement>) => {
            if (!showFloatingBar && event.currentTarget.scrollTop > scrollTop) {
                setShowFloatingBar(true);
            } else if (showFloatingBar && event.currentTarget.scrollTop < scrollTop) {
                setShowFloatingBar(false);
            }
        },
        [scrollTop, showFloatingBar],
    );

    return [showFloatingBar, handleScrollEvent];
};

export default useFloatingBarScrollHandler;
