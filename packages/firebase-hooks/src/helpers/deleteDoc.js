import { deleteDoc as fbDeleteDoc } from 'firebase/firestore';

export default function deleteDoc(ref) {
    if (!ref) return Promise.reject(new Error('No reference provided'));
    if (ref.delete) {
        return ref.delete();
    }
    return fbDeleteDoc(ref);
}
