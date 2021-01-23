import { Ref, UIEvent } from 'react';

interface ScrollingIntentParams {
    callback?: (event: UIEvent) => void;
    isListening?: boolean;
    triggerElementRef?: Ref;
    threshold?: number;
}

export default function (params: ScrollingIntentParams): void;
