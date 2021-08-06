import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFw1KFI0_iJILIAt008ocdd47tpYML96g",
  authDomain: "cart-460d8.firebaseapp.com",
  projectId: "cart-460d8",
  storageBucket: "cart-460d8.appspot.com",
  messagingSenderId: "326265443911",
  appId: "1:326265443911:web:b2bcd09b8f178e29f48362"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


