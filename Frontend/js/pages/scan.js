const app = document.getElementById("app");

export function loadScan() {

    app.innerHTML = `

        <section class="scan-page">

            <h1>Plant Disease Scanner</h1>

            <p class="scan-subtitle">
                Upload a clear image of a plant leaf to detect diseases.
            </p>

            <div class="upload-box">

                <input
                    type="file"
                    id="plantImage"
                    accept="image/*"
                    hidden
                >

                <label for="plantImage" class="upload-label">
                    📷 Click to Upload Image
                </label>

                <div id="imagePreview"></div>

            </div>

            <button id="scanBtn" class="scan-btn">
                Scan Plant
            </button>

            <div id="scanResult" class="scan-result">

                <p>No scan performed yet.</p>

            </div>

        </section>

    `;
    
    const plantImage = document.getElementById("plantImage");

    const imagePreview = document.getElementById("imagePreview");

    plantImage.addEventListener("change", () => {

        const file = plantImage.files[0];

        if (!file) return;

        const imageURL = URL.createObjectURL(file);

        imagePreview.innerHTML = `
            <img src="${imageURL}" alt="Plant Image">
        `;

    });
    const scanBtn = document.getElementById("scanBtn");

    scanBtn.addEventListener("click", () => {

        if (!plantImage.files[0]) {

            alert("Please upload an image first.");
            return;

        }

        const scanResult = document.getElementById("scanResult");

        scanResult.innerHTML = `
            <p>🔄 Scanning your plant...</p>
        `;
        const formData = new FormData();

formData.append("image", plantImage.files[0]);

fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData
})
.then(response => response.json())
.then(data => {

    scanResult.innerHTML = `
        <h3>${data.message}</h3>
    `;

});

    });
}