import { httpsCallable as fbHttpsCallable } from 'firebase/functions';

export default function httpsCallable(functions, name) {
    if (functions.httpsCallable) {
        return functions.httpsCallable(name);
    }
    return fbHttpsCallable(functions, name);
}
