import firebase from 'react-native-firebase';


const config = {
    apiKey: "AIzaSyDtO9V4SYt-f-g5Jlfs-ks7HI-8QHu8AOQ ",
    projectId: "project1-bdf86",
    databaseURL: "Dhttps://project1-bdf86.firebaseio.com/person/VN8wSiRQj2rAOXzPxLds",
    authDomain: "project1-bdf86.firebaseapp.com",
    // OPTIONAL
    storageBucket: "project1-bdf86.appspot.com",
    messagingSenderId: "801978477919"
  };
   
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;