import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFAoj4kwVG4MPMDnyN0nT-7J79MjXYeQE",
    authDomain: "whatsapp-clone-9f773.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-9f773.firebaseio.com",
    projectId: "whatsapp-clone-9f773",
    storageBucket: "whatsapp-clone-9f773.appspot.com",
    messagingSenderId: "607171259141",
    appId: "1:607171259141:web:82726387b70d84d5a2256c",
    measurementId: "G-66S2PFN5FN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;