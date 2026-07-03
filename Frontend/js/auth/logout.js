import { auth } from "../firebase.js";

import {
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const navBtn = document.getElementById("navBtn");

navBtn.addEventListener("click", async () => {

    if (navBtn.textContent !== "Logout") return;

    try {

        await signOut(auth);

        alert("Logged out successfully.");

    } catch (error) {

        alert(error.message);

    }

});