import { addPlant } from "../services/plantsService.js";

export function loadMyPlants() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="my-plants">

            <h1>🌱 My Plants</h1>

            <button id="addPlantBtn">
                + Add Plant
            </button>

            <div id="plantsContainer">
                <p>No plants added yet.</p>
            </div>

        </section>
    `;

    document.getElementById("addPlantBtn").addEventListener("click", () => {

        document.getElementById("plantsContainer").innerHTML = `
            <input type="text" id="plantName" placeholder="Plant Name">

            <button id="savePlantBtn">
                Save Plant
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

                alert("Plant saved successfully!");

                document.getElementById("plantsContainer").innerHTML = `
                    <h3>${plantName}</h3>
                `;

            } catch (error) {
                console.error(error);
                alert(error.message);
            }

        });

    });

}