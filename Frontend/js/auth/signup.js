import { auth } from "../firebase.js";

import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const signupBtn = document.getElementById("signupBtn");


if (signupBtn) {


    signupBtn.addEventListener("click", async () => {


        const name = document
            .getElementById("signupName")
            .value
            .trim();


        const email = document
            .getElementById("signupEmail")
            .value
            .trim();


        const password = document
            .getElementById("signupPassword")
            .value;



        if (!name || !email || !password) {

            alert("Please fill all fields.");
            return;

        }



        try {


            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );



            await updateProfile(
                userCredential.user,
                {
                    displayName:name
                }
            );


            document.getElementById("authModal").style.display = "none";


        }
        catch(error) {


            alert(error.message);

        }


    });


}