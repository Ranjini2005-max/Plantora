import { db } from "../firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    doc,
    updateDoc
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
export async function getPlants() {

    const snapshot = await getDocs(plantsCollection);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

}
export async function deletePlant(id) {

    await deleteDoc(doc(db, "plants", id));

}
export async function getPlant(id) {

    const docRef = doc(db, "plants", id);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {

    return {
        id: docSnap.id,
        ...docSnap.data()
    };

    }

    return null;

}
export async function editPlant(id, plant) {
    const docRef = doc(db, "plants", id);

    await updateDoc(docRef, plant);
}