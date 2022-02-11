import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAdTFPsEJoDDJOu8cxh1rK6z0pTe4QyB7o",
  authDomain: "biblioteca-eletronica-27177.firebaseapp.com",
  projectId: "biblioteca-eletronica-27177",
  storageBucket: "biblioteca-eletronica-27177.appspot.com",
  messagingSenderId: "601499718101",
  appId: "1:601499718101:web:0fdd1cbe2ce9bead58ed5c",
  measurementId: "G-NF498E9XMM"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
