import { Timestamp } from 'firebase/firestore';

export default function normalizeCreatedAt(
    date: number | Date | Timestamp | unknown,
): number | null {
    if (typeof date === 'number' && date > 0) {
        return date;
    }
    if (date instanceof Timestamp) {
        return date.toDate().getTime();
    }
    if (date instanceof Date) {
        return date.getTime();
    }
    return null;
}
