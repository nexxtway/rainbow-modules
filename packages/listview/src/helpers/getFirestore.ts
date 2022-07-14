import { getFirestore as fbGetFirestore } from 'firebase/firestore';

export default function getFirestore(app: any): any {
    return app.firestore ? app.firestore() : fbGetFirestore(app);
}
