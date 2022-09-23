import * as firestore from 'firebase/firestore';
import getCallableKey from './getCallableKey';

export default function query(ref) {
    let key = getCallableKey(ref, 'where');
    if (key) {
        return ref;
    }

    key = getCallableKey(firestore, 'query');
    if (key) {
        return firestore[key](ref);
    }

    return null;
}
