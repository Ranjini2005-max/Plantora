import { auth } from "../firebase.js";
import { showPage } from "../router.js";
import { showSidebar, hideSidebar } from "../ui/navbar.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const navBtn = document.getElementById("navBtn");


onAuthStateChanged(auth, (user) => {


    if (user) {


        if (navBtn) {

            navBtn.textContent = "Logout";

        }


        showSidebar();



        const app = document.getElementById("app");


        if (app && app.innerHTML.trim() === "") {

            showPage("home");

        }


    } 
    else {


        if (navBtn) {

            navBtn.textContent = "Login";

        }


        hideSidebar();


        showPage("landing");


    }


});