import { db } from "../firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const plantsCollection = collection(db, "plants");

export async function addPlant(plant) {

    console.log("Inside addPlant()", plant);

    try {

        await addDoc(plantsCollection, plant);

        console.log("Document added successfully");

    } catch (error) {

        console.error("Firestore Error:", error);

    }

}