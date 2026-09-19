import {
    addPlant,
    getPlants,
    deletePlant,
    getPlant,
    editPlant as updatePlant
} from "../services/plantsService.js";

let editingPlantId = null;


// Show Add/Edit Plant Form
function showPlantForm() {

    const plantForm = document.getElementById("plantForm");

    if (plantForm.innerHTML !== "") {
        return;
    }

    plantForm.innerHTML = `
        <div class="plant-form-row">

            <input
                type="text"
                id="plantName"
                placeholder="Plant Name"
            >

            <button id="savePlantBtn" class="btn">
                ${editingPlantId ? "Update Plant" : "Save Plant"}
            </button>

            <button id="cancelPlantBtn" class="btn">
                Cancel
            </button>

        </div>
    `;


    // Save / Update Plant
    document
        .getElementById("savePlantBtn")
        .addEventListener("click", async () => {

            try {

                const plantName =
                    document.getElementById("plantName").value;

                if (plantName.trim() === "") {
                    alert("Please enter a plant name.");
                    return;
                }

                const plant = {
                    name: plantName
                };


                // Update existing plant
                if (editingPlantId) {

                    await updatePlant(
                        editingPlantId,
                        plant
                    );

                }

                // Add new plant
                else {

                    await addPlant(plant);

                }


                editingPlantId = null;

                loadMyPlants();

            }

            catch (error) {

                console.error(error);

                alert(error.message);

            }

        });


    // Cancel
    document
        .getElementById("cancelPlantBtn")
        .addEventListener("click", () => {

            editingPlantId = null;

            plantForm.innerHTML = "";

        });

}


// Edit Plant
async function editPlant(id) {

    const plant = await getPlant(id);

    if (!plant) {
        alert("Plant not found.");
        return;
    }

    editingPlantId = id;

    showPlantForm();

    document.getElementById("plantName").value =
        plant.name;

    document.getElementById("savePlantBtn").textContent =
        "Update Plant";

}


// Load My Plants Page
export async function loadMyPlants() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="my-plants">

            <h1>🌱 My Plants</h1>

            <button id="addPlantBtn" class="btn">
                + Add Plant
            </button>

            <div id="plantForm"></div>

            <div id="plantsContainer"></div>

        </section>
    `;


    const plantsContainer =
        document.getElementById("plantsContainer");


    try {

        const plants = await getPlants();

        plantsContainer.innerHTML = "";


        // No plants
        if (plants.length === 0) {

            plantsContainer.innerHTML = `
                <div class="plant-card">
                    <p>No plants added yet.</p>
                </div>
            `;

        }


        // Display plants
        plants.forEach((plant) => {

            plantsContainer.innerHTML += `
                <div class="plant-card">

                    <h3>🌱 ${plant.name}</h3>

                    <button
                        class="editPlantBtn btn"
                        data-id="${plant.id}">
                        Edit
                    </button>

                    <button
                        class="deletePlantBtn btn"
                        data-id="${plant.id}">
                        Delete
                    </button>

                </div>
            `;

        });


        // Delete Plant
        document
            .querySelectorAll(".deletePlantBtn")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    async () => {

                        const confirmDelete = confirm(
                            "Are you sure you want to delete this plant?"
                        );

                        if (!confirmDelete) {
                            return;
                        }

                        await deletePlant(
                            button.dataset.id
                        );

                        loadMyPlants();

                    }
                );

            });


        // Edit Plant
        document
            .querySelectorAll(".editPlantBtn")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        editPlant(
                            button.dataset.id
                        );

                    }
                );

            });


        // Add Plant Button
        document
            .getElementById("addPlantBtn")
            .addEventListener("click", () => {

                editingPlantId = null;

                showPlantForm();

            });

    }

    catch (error) {

        console.error(
            "Error loading plants:",
            error
        );

        plantsContainer.innerHTML = `
            <div class="plant-card">
                <p>❌ Failed to load plants.</p>
            </div>
        `;

    }

}