// firebase.js
// Connects your app to Firebase 🔥

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config from earlier
const firebaseConfig = {
  apiKey: "AIzaSyBLRYLdJGLNIJvFhZCUE7jCpvj4ijCYytE",
  authDomain: "whatshop-91b30.firebaseapp.com",
  projectId: "whatshop-91b30",
  storageBucket: "whatshop-91b30.firebasestorage.app",
  messagingSenderId: "235822316914",
  appId: "1:235822316914:web:b1e1d6a286d92adec971eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports so we can use it in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
