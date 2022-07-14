import { updateDoc as fbUpdateDoc } from 'firebase/firestore';

export default function updateDoc(ref, data, options) {
    if (!ref) return Promise.reject(new Error('No reference provided'));
    if (ref.update) {
        return ref.update(data, options);
    }
    return fbUpdateDoc(ref, data, options);
}
