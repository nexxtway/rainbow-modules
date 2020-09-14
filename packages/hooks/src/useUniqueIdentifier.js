import { useMemo } from 'react';

let idCounter = 0;
export default function useUniqueIdentifier(prefix) {
    return useMemo(() => {
        idCounter += 1;
        return prefix ? `${prefix}-${idCounter}` : String(idCounter);
    }, [prefix]);
}
