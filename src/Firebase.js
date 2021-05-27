import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQywh4PXV8fxERTXCNBzjkpUV_XYLtSRA",
    authDomain: "react-contact-47242.firebaseapp.com",
    projectId: "react-contact-47242",
    storageBucket: "react-contact-47242.appspot.com",
    messagingSenderId: "124213338741",
    appId: "1:124213338741:web:ae65de4edf52231f584e3c"
  });

  const db = firebaseApp.firestore();

  export {db};