import { getDocs as fbGetDocs } from 'firebase/firestore';

export default function getDocs(query) {
    if (query.get) {
        return query.get();
    }
    return fbGetDocs(query);
}
