console.log("SCRIPT.JS LOADED");
import "./firebase.js";

import "./auth/signup.js";
import "./auth/login.js";
import "./auth/authState.js";
import "./auth/logout.js";


import { auth } from "./firebase.js";



const modal = document.getElementById("authModal");

const navBtn = document.getElementById("navBtn");

const closeModal = document.getElementById("closeModal");


const loginForm = document.getElementById("loginForm");

const signupForm = document.getElementById("signupForm");


const showSignup = document.getElementById("showSignup");

const showLogin = document.getElementById("showLogin");





// Open Login Modal

if (navBtn) {


    navBtn.addEventListener("click", () => {


        if (auth.currentUser) {

            return;

        }



        modal.style.display = "flex";


        loginForm.style.display = "block";

        signupForm.style.display = "none";


    });


}





// Close Modal

if (closeModal) {


    closeModal.addEventListener("click", () => {


        modal.style.display = "none";


    });


}






// Close when clicking outside

window.addEventListener("click", (event) => {


    if (event.target === modal) {


        modal.style.display = "none";


    }


});






// Show Signup

if (showSignup) {


    showSignup.addEventListener("click", (event) => {


        event.preventDefault();


        loginForm.style.display = "none";


        signupForm.style.display = "block";


    });


}






// Show Login

if (showLogin) {


    showLogin.addEventListener("click", (event) => {


        event.preventDefault();


        signupForm.style.display = "none";


        loginForm.style.display = "block";


    });


}