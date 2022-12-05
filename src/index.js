import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// setting firebase
const firebaseConfig = {
    apiKey: "AIzaSyBhj9S-PdCbB31D15SCVTFs0sRFlIlS7jc",
    authDomain: "cart-app-e22b8.firebaseapp.com",
    projectId: "cart-app-e22b8",
    storageBucket: "cart-app-e22b8.appspot.com",
    messagingSenderId: "1023994927850",
    appId: "1:1023994927850:web:b0494b19a65846db585593"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App firebaseApp = {app} />
    </React.StrictMode>
);
