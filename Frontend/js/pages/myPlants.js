import {
    addPlant,
    getPlants,
    deletePlant
} from "../services/plantsService.js";

export async function loadMyPlants() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="my-plants">

            <h1>🌱 My Plants</h1>

            <button id="addPlantBtn">
                + Add Plant
            </button>

            <div id="plantForm"></div>

            <hr>

            <div id="plantsContainer"></div>

        </section>
    `;
    const plants = await getPlants();
    const plantsContainer = document.getElementById("plantsContainer");

    plantsContainer.innerHTML = "";

    plants.forEach((plant) => {

        plantsContainer.innerHTML += `
            <div class="plant-card">

                <h3>🌱 ${plant.name}</h3>

                <button class="editPlantBtn" data-id="${plant.id}">
                    Edit
                </button>

                <button class="deletePlantBtn" data-id="${plant.id}">
                    Delete
                </button>

            </div>
        `;

    });
    document.querySelectorAll(".deletePlantBtn").forEach((button) => {

    button.addEventListener("click", async () => {

        const confirmDelete = confirm("Are you sure you want to delete this plant?");

if (!confirmDelete) {
    return;
}
        await deletePlant(button.dataset.id);

loadMyPlants();

    });

});

    console.table(plants);
    document.getElementById("addPlantBtn").addEventListener("click", () => {
        const plantForm = document.getElementById("plantForm");

        if (plantForm.innerHTML !== "") {
            return;
        }

        document.getElementById("plantForm").innerHTML = `
            <input type="text" id="plantName" placeholder="Plant Name">

            <button id="savePlantBtn">
                Save Plant
            </button>

            <button id="cancelPlantBtn">
                Cancel
            </button>
        `;

        document.getElementById("savePlantBtn").addEventListener("click", async () => {

            console.log("Save button clicked");

            try {

                const plantName = document.getElementById("plantName").value;

                if (plantName.trim() === "") {
                    alert("Please enter a plant name.");
                    return;
                }

                const plant = {
                    name: plantName
                };

                await addPlant(plant);
                loadMyPlants();
                return;

                document.getElementById("plantForm").innerHTML = "";

            } catch (error) {
                console.error(error);
                alert(error.message);
            }

        });
        document.getElementById("cancelPlantBtn").addEventListener("click", () => {

            document.getElementById("plantForm").innerHTML = "";

        });

    });

}