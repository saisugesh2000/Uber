

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC0JzsJDvt5rS70sZp5uZt6ZjHLnYffqEY",
    authDomain: "umadevi-5e0ec.firebaseapp.com",
    projectId: "umadevi-5e0ec",
    storageBucket: "umadevi-5e0ec.appspot.com",
    messagingSenderId: "927172373519",
    appId: "1:927172373519:web:167733343e23f96ad4477a"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
export const firestore = firebase.firestore();
