import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.STORYBOOK_API_KEY,
    authDomain: process.env.STORYBOOK_AUTH_DOMAIN,
    databaseURL: process.env.STORYBOOK_DATABASE_URL,
    projectId: process.env.STORYBOOK_PROJECT_ID,
    storageBucket: process.env.STORYBOOK_STORAGE_BUCKET,
    messagingSenderId: process.env.STORYBOOK_MESSAGING_SENDER_ID,
    appId: process.env.STORYBOOK_APP_ID,
};

const instance = firebase.initializeApp(firebaseConfig);

export default instance;
