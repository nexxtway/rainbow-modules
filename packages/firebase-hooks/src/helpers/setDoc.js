import { setDoc as fbSetDoc } from 'firebase/firestore';

export default function setDoc(ref, data, options) {
    if (!ref) return Promise.reject(new Error('No reference provided'));
    if (ref.set) {
        return ref.set(data, options);
    }
    return fbSetDoc(ref, data, options);
}
