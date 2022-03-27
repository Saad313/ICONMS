import firebase from "firebase/app";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     authDomain: "reactnativefirebase-00000.firebaseapp.com",
//     databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
//     projectId: "reactnativefirebase-00000",
//     storageBucket: "reactnativefirebase-00000.appspot.com",
//     messagingSenderId: "000000000000000",
//     appId: "1:000000000000000:web:000000000000000"
// };

const firebaseConfig = {
  //esketchers
  apiKey: "AIzaSyDBQ5EXfOJqesIfOnkxSnBlsH-3fyrAkKs",
  authDomain: "iconms-cdaad.firebaseapp.com",
  databaseURL: "https://iconms-cdaad.firebaseio.com",
  projectId: "iconms-cdaad",
  storageBucket: "iconms-cdaad.appspot.com",
  messagingSenderId: "61392170106",
  appId: "1:61392170106:android:53edcca75559980c799fc3",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'
// const firebaseConfig = {
//     apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     authDomain: "reactnativefirebase-00000.firebaseapp.com",
//     databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
//     projectId: "reactnativefirebase-00000",
//     storageBucket: "reactnativefirebase-00000.appspot.com",
//     messagingSenderId: "000000000000000",
//     appId: "1:000000000000000:web:000000000000000"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// export default firebase;
