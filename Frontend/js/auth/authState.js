import { auth } from "../firebase.js";
import { showPage } from "../router.js";
import { showSidebar, hideSidebar } from "../ui/navbar.js";
import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const navBtn = document.getElementById("navBtn");
onAuthStateChanged(auth, (user) => {

    if (user) {

    navBtn.textContent = "Logout";

    showSidebar();

    showPage("home");

} else {

    navBtn.textContent = "Login";

    hideSidebar();

    showPage("landing");

}

});