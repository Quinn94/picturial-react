import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBniqVYGGItId72cl8Jei5KfDLpfXrdItY",
  authDomain: "pictorial-react.firebaseapp.com",
  databaseURL: "https://pictorial-react.firebaseio.com",
  projectId: "pictorial-react",
  storageBucket: "pictorial-react.appspot.com",
  messagingSenderId: "563405757768",
  appId: "1:563405757768:web:6675b92139c6c467d0e77d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectDatabase = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectDatabase, timestamp };