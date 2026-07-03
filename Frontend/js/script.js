import "./firebase.js";
import "./auth/signup.js";
import "./auth/login.js";
import "./auth/authState.js";
import "./auth/logout.js";

// Get elements
const modal = document.getElementById("authModal");
const navBtn = document.getElementById("navBtn");
const closeBtn = document.getElementById("closeModal");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Open Modal
import { auth } from "./firebase.js";

navBtn.addEventListener("click", () => {

    if (auth.currentUser) {
        return;
    }

    modal.style.display = "flex";

    loginForm.style.display = "block";
    signupForm.style.display = "none";

});

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Switch to Signup
showSignup.addEventListener("click", (e) => {
    e.preventDefault();

    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

// Switch to Login
showLogin.addEventListener("click", (e) => {
    e.preventDefault();

    signupForm.style.display = "none";
    loginForm.style.display = "block";
});