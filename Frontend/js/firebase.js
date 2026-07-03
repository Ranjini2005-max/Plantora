// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfmc_BXnd_GIxoOinoiyXIBa8eUB54hAU",
    authDomain: "plantora-ff118.firebaseapp.com",
    projectId: "plantora-ff118",
    storageBucket: "plantora-ff118.firebasestorage.app",
    messagingSenderId: "750821421772",
    appId: "1:750821421772:web:c4f6fca8b5a11e49944869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export auth
export { auth };