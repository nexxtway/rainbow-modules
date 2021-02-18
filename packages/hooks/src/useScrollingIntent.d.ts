import { RefObject, UIEvent } from 'react';

type TriggerElementRefFunction = () => RefObject<HTMLElement>;

interface ScrollingIntentParams {
    callback?: (event: UIEvent) => void;
    isListening?: boolean;
    triggerElementRef?: RefObject<HTMLElement> | TriggerElementRefFunction;
    threshold?: number;
}

export default function (params: ScrollingIntentParams): void;
