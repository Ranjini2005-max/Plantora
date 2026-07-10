import {
    addPlant,
    getPlants,
    deletePlant,
    getPlant,
    editPlant as updatePlant
} from "../services/plantsService.js";
let editingPlantId = null;
async function editPlant(id) {

    const plant = await getPlant(id);
    editingPlantId = id;
    document.getElementById("addPlantBtn").click();
    document.getElementById("plantName").value = plant.name;
    document.getElementById("savePlantBtn").textContent = "Update Plant";

    console.log(plant);

}
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
    const plants = await getPlants();
    const plantsContainer = document.getElementById("plantsContainer");

    plantsContainer.innerHTML = "";

    plants.forEach((plant) => {

        plantsContainer.innerHTML += `
            <div class="plant-card">

                <h3>🌱 ${plant.name}</h3>

                <button class="editPlantBtn btn" data-id="${plant.id}">
                    Edit
                </button>

                <button class="deletePlantBtn btn" data-id="${plant.id}">
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
document.querySelectorAll(".editPlantBtn").forEach((button) => {

    button.addEventListener("click", () => {

        editPlant(button.dataset.id);

    });

});

    console.table(plants);
    document.getElementById("addPlantBtn").addEventListener("click", () => {
        const plantForm = document.getElementById("plantForm");

        if (plantForm.innerHTML !== "") {
            return;
        }

        document.getElementById("plantForm").innerHTML = `
            <div class="plant-form-row">

    <input type="text" id="plantName" placeholder="Plant Name">

    <button id="savePlantBtn" class="btn">
        Save Plant
    </button>

    <button id="cancelPlantBtn" class="btn">
        Cancel
    </button>

</div>
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

                if (editingPlantId) {

    await updatePlant(editingPlantId, plant);

    } else {

        await addPlant(plant);

    }
    editingPlantId = null;
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