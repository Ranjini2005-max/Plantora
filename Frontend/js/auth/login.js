import { auth } from "../firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const loginBtn = document.getElementById("loginBtn");


if (loginBtn) {


    loginBtn.addEventListener("click", async () => {


        const email = document
            .getElementById("loginEmail")
            .value
            .trim();


        const password = document
            .getElementById("loginPassword")
            .value;



        if (!email || !password) {

            alert("Please enter your email and password.");
            return;

        }



        try {


            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


            document.getElementById("authModal").style.display = "none";


        }
        catch(error) {


            alert(error.message);

        }


    });


}