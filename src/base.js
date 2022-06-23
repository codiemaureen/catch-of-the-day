import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAbwHvxK1HFY5WwavVeCow-tAiSRFM6SQ",
  authDomain: "catch-of-the-day-d9db9.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-d9db9-default-rtdb.firebaseio.com",
});


const base = Rebase.createClass(firebaseApp.database())


//This is a named export
export { firebaseApp };

//This is a default export;
export default base;