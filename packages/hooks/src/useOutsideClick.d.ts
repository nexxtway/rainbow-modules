import { Ref } from 'react';

export default function useOutsideClick(
    target: HTMLElement | Ref<HTMLElement>,
    onOutsideClick: (event: MouseEvent) => void,
    isListening?: boolean,
): void;
