import { writeBatch as fbWriteBatch } from 'firebase/firestore';

export default function writeBatch(db) {
    if (db.batch) {
        return db.batch();
    }
    return fbWriteBatch(db);
}
