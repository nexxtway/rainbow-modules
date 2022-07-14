import { query as fbQuery } from 'firebase/firestore';

export default function query(ref) {
    if (ref.where) {
        return ref;
    }
    return fbQuery(ref);
}
