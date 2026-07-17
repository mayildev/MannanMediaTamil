import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5QmFHLSr4Mjfh4kd2SHTa0vVI_q7rqfo",
  authDomain: "mannan-media.firebaseapp.com",
  projectId: "mannan-media",
  storageBucket: "mannan-media.firebasestorage.app",
  messagingSenderId: "275521624734",
  appId: "1:275521624734:web:f2f6b78c16609ca77bf98f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
