import { useMemo } from 'react';
import { nanoid } from 'nanoid';

export default function useUniqueIdentifier(prefix) {
    return useMemo(() => {
        return prefix ? `${prefix}-${nanoid(5)}` : nanoid(5);
    }, [prefix]);
}
