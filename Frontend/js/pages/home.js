const app = document.getElementById("app");

export function loadHome() {

    app.innerHTML = `

        <section class="dashboard">

            <h1>Dashboard</h1>

            <p>
                Welcome back! 🌿
            </p>

            <div class="dashboard-grid">

                <div class="card" onclick="alert('Clicked')">
                    📷
                    <h3>Scan Disease</h3>
                </div>

                <div class="card">
                    🌱
                    <h3>My Plants</h3>
                </div>

                <div class="card">
                    💡
                    <h3>Care Tips</h3>
                </div>

            </div>

        </section>

    `;
}