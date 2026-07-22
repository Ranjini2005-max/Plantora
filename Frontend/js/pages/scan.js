const app = document.getElementById("app");

export function loadScan() {

    console.log("SCAN PAGE LOADED");
    app.innerHTML = `

        <section class="scan-page">

            <h1>
                Plant Disease Scanner
            </h1>

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


                <label
                    for="plantImage"
                    class="upload-label">

                    📷 Click to Upload Image

                </label>


                <div id="imagePreview"></div>

            </div>


            <button
                type="button"
                id="scanBtn"
                class="scan-btn">

                Scan Plant

            </button>


            <div id="scanResult" class="scan-result">

                <p>
                    No scan performed yet.
                </p>

            </div>


        </section>

    `;


    const plantImage = document.getElementById("plantImage");
    const imagePreview = document.getElementById("imagePreview");
    const scanBtn = document.getElementById("scanBtn");
    const scanResult = document.getElementById("scanResult");



    // Image Preview

    plantImage.addEventListener("change", () => {

        const file = plantImage.files[0];

        if (!file) return;


        const imageURL = URL.createObjectURL(file);


        imagePreview.innerHTML = `

            <img
                src="${imageURL}"
                alt="Plant Image">

        `;

    });





    // Scan Button

    scanBtn.onclick = async (event) => {


        event.preventDefault();


        console.log("SCAN BUTTON CLICKED");


        const file = plantImage.files[0];


        if (!file) {

            alert("Please upload an image first.");
            return;

        }



        scanResult.innerHTML = `

            <p>
                🔄 Scanning your plant...
            </p>

        `;



        const formData = new FormData();

        formData.append("image", file);



        try {


            console.log("BEFORE FETCH");


            const response = await fetch(

                "http://localhost:5000/predict",

                {

                    method: "POST",

                    body: formData

                }

            );



            console.log("AFTER FETCH");
            


            console.log("STATUS:", response.status);



            const data = await response.json();



            console.log("SERVER RESPONSE:", data);



            scanResult.innerHTML = `

    <h3>
        ✅ ${data.message}
    </h3>

`;



            console.log("RESULT DISPLAYED");
            event.stopPropagation();


        }


        catch(error) {


            console.error("ERROR:", error);


            scanResult.innerHTML = `

                <p>
                    ❌ Failed to connect to backend.
                </p>

            `;


        }


    };


}