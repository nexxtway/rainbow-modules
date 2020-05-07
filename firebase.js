import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCrLhX4CFDdrDVaRp00dhKy9W8w0vj96BI',
    authDomain: 'fir-hooks-66a0b.firebaseapp.com',
    databaseURL: 'https://fir-hooks-66a0b.firebaseio.com',
    projectId: 'fir-hooks-66a0b',
    storageBucket: 'fir-hooks-66a0b.appspot.com',
    messagingSenderId: '872310474228',
    appId: '1:872310474228:web:e4bdc4fd1dfd300d9ea5a1',
    measurementId: 'G-4PXFXNHVJC',
};

const instance = firebase.initializeApp(firebaseConfig);
export default instance;
