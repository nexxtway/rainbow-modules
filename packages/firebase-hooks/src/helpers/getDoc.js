import { getDoc as fbGetDoc } from 'firebase/firestore';

export default function getDoc(ref) {
    if (!ref) return Promise.reject(new Error('No reference provided'));
    if (ref.get) {
        return ref.get();
    }
    return fbGetDoc(ref);
}
