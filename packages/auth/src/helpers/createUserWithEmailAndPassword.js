import { createUserWithEmailAndPassword as fbCreateUserWithEmailAndPassword } from 'firebase/auth';

export default function useCreateUserWithEmailAndPassword(auth, email, password) {
    if (auth.createUserWithEmailAndPassword) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    return fbCreateUserWithEmailAndPassword(auth, email, password);
}
