/* eslint-disable react/no-deprecated */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyDl97eVEAkbg0iAdMifm3ePvstKYXS5Glw",
  authDomain: "trabajopracticofinalaramayo.firebaseapp.com",
  projectId: "trabajopracticofinalaramayo",
  storageBucket: "trabajopracticofinalaramayo.appspot.com",
  messagingSenderId: "239313910871",
  appId: "1:239313910871:web:fec316ce70a8016cf93712",
  measurementId: "G-1RWFZ84T7Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = auth;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

export { auth };
