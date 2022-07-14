import { onSnapshot as fbOnSnapshot } from 'firebase/firestore';

export default function onSnapshot(ref, callback, errorCallback) {
    if (!ref) return () => {};
    if (ref.onSnapshot) {
        return ref.onSnapshot(callback, errorCallback);
    }
    return fbOnSnapshot(ref, callback, errorCallback);
}
