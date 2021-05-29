import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FloatingTopBarProps } from './types';
import { StyledContainer } from './styled';

const FloatingTopBar: React.FC<FloatingTopBarProps> = ({
    className,
    style,
    isVisible,
    children,
}: FloatingTopBarProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState(0);

    const onParentScroll = useCallback((ev: Event) => {
        setTop((ev.target as HTMLElement).scrollTop);
    }, []);

    useEffect(() => {
        const parent = containerRef.current?.parentElement;
        if (parent) {
            parent.addEventListener('scroll', onParentScroll);
        }
        return () => {
            if (parent) {
                parent.removeEventListener('scroll', onParentScroll);
            }
        };
    }, [onParentScroll]);

    return (
        <StyledContainer
            className={className}
            style={style}
            isVisible={isVisible}
            top={top}
            ref={containerRef}
        >
            {children}
        </StyledContainer>
    );
};

export default FloatingTopBar;
