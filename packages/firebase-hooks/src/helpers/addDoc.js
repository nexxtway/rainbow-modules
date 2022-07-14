import { addDoc as fbAddDoc } from 'firebase/firestore';

export default function addDoc(ref, data) {
    if (ref.add) {
        return ref.add(data);
    }
    return fbAddDoc(ref, data);
}
