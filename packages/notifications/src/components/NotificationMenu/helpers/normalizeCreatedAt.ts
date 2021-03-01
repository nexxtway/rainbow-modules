import firebase from 'firebase';

export default function normalizeCreatedAt(
    date: number | Date | firebase.firestore.Timestamp | unknown,
): number | null {
    if (typeof date === 'number' && date > 0) {
        return date;
    }
    if (date instanceof firebase.firestore.Timestamp) {
        return date.toDate().getTime();
    }
    if (date instanceof Date) {
        return date.getTime();
    }
    return null;
}
