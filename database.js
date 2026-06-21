  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYCA5EVXpf2umy3zM3hCqp1ZV4eu2TUmY",
    authDomain: "login-signup-page-945d0.firebaseapp.com",
    databaseURL: "https://login-signup-page-945d0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "login-signup-page-945d0",
    storageBucket: "login-signup-page-945d0.firebasestorage.app",
    messagingSenderId: "473411739059",
    appId: "1:473411739059:web:467302962cd1e52ca17fc6",
    measurementId: "G-DHLRL53GBS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword}
