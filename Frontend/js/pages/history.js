import { getHistory } from "../services/plantsService.js";

const app = document.getElementById("app");


export async function loadHistory() {

    app.innerHTML = `

        <section class="history-page">

            <h1>Scan History</h1>
            <p id="historyCount" class="history-count">Total Scans: 0</p>

            <p class="history-subtitle">
                View your previous plant disease scans.
            </p>

            <div id="historyContainer">

                <p>
                    🔄 Loading history...
                </p>

            </div>

        </section>

    `;


    const historyContainer =
        document.getElementById("historyContainer");


    try {

        const history = await getHistory();
        history.sort((a, b) => new Date(b.date) - new Date(a.date));

        document.getElementById("historyCount").textContent =
    `Total Scans: ${history.length}`;
        if (history.length === 0) {

            historyContainer.innerHTML = `

                <div class="empty-history">

                    <p>
                        🌿 No scan history yet.
                    </p>

                    <p>
                        Your completed plant scans will appear here.
                    </p>

                </div>

            `;

            return;

        }


        historyContainer.innerHTML = history.map(scan => `

            <div class="history-card">

                <h3>
                    🌱 ${scan.plantName}
                </h3>

                <p>
                    ${
                        scan.disease.toLowerCase() === "healthy"
                            ? "✅ Plant appears healthy"
                            : `⚠️ Disease: ${scan.disease}`
                    }
                </p>

                <p>
                    🎯 Confidence: ${scan.confidence}%
                </p>

                <p>
                    📅 ${new Date(scan.date).toLocaleString()}
                </p>

            </div>

        `).join("");


    } catch (error) {

        console.error("History loading error:", error);

        historyContainer.innerHTML = `

            <p>
                ❌ Failed to load scan history.
            </p>

        `;

    }

}