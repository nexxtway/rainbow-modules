import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useUniqueIdentifier(prefix) {
    return useMemo(() => {
        return `${prefix}-${uuidv4()}`;
    }, [prefix]);
}
