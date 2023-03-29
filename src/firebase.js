import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMunrZAAe437b0_QJE21LNvhI4s5nc6aI",
    authDomain: "netflix-clone-app-8322b.firebaseapp.com",
    projectId: "netflix-clone-app-8322b",
    storageBucket: "netflix-clone-app-8322b.appspot.com",
    messagingSenderId: "576307618167",
    appId: "1:576307618167:web:815fa7e405cc4f81fa4172"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()


  export { auth }
  
  export default db