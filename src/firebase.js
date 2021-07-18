import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAxn7nNfCodMyVlyf9ULruuO1FJSpSEjYc",
  authDomain: "reactmuicrudapp-6fffd.firebaseapp.com",
  projectId: "reactmuicrudapp-6fffd",
  storageBucket: "reactmuicrudapp-6fffd.appspot.com",
  messagingSenderId: "616597345820",
  appId: "1:616597345820:web:5c39d0ee4dddd1532631d9",
};
// Initialize Firebase

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default FirebaseApp;
export {
    db
}