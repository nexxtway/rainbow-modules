import { useMemo } from 'react';
import uniqueId from '../utils/uniqueId';

export default function useUniqueIdentifier(prefix) {
    return useMemo(() => uniqueId(prefix), [prefix]);
}
