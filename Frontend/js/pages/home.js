import { showPage } from "../router.js";

const app = document.getElementById("app");


export function loadHome() {


    app.innerHTML = `

        <section class="dashboard">


            <h1>Dashboard</h1>


            <p>
                Welcome back! 🌿
            </p>



            <div class="dashboard-grid">



                <div class="card" id="scanCard">

                    📷

                    <h3>
                        Scan Disease
                    </h3>

                </div>



                <div class="card" id="plantsCard">

                    🌱

                    <h3>
                        My Plants
                    </h3>

                </div>



                <div class="card">

                    💡

                    <h3>
                        Care Tips
                    </h3>

                </div>



            </div>


        </section>

    `;



    const scanCard = document.getElementById("scanCard");
    const plantsCard = document.getElementById("plantsCard");



    if (scanCard) {

        scanCard.addEventListener("click", () => {

            showPage("scan");

        });

    }



    if (plantsCard) {

        plantsCard.addEventListener("click", () => {

            showPage("plants");

        });

    }


}