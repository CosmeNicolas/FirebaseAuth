/* import { initializeApp } from "firebase/app"; */

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyDcaHE-xdBtaGLIYgMFTFulfeUJYiaCU6o",
  authDomain: "fir-auth-react-4e8f5.firebaseapp.com",
  projectId: "fir-auth-react-4e8f5",
  storageBucket: "fir-auth-react-4e8f5.appspot.com",
  messagingSenderId: "397838123470",
  appId: "1:397838123470:web:51b9c4690d3c471bd8eb9f"
};


const app = firebase.initializeApp(firebaseConfig);

export default app