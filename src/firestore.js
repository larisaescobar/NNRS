import firebase from '@firebase/app';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyDo7mnEi42jfShDWh1p_0M0xfxKufhU27Q",
    authDomain: "prototype-1-f23a6.firebaseapp.com",
    databaseURL: "https://prototype-1-f23a6.firebaseio.com",
    projectId: "prototype-1-f23a6",
    storageBucket: "prototype-1-f23a6.appspot.com",
    messagingSenderId: "312002240943"
  };

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;