const app = document.getElementById("app");

export function loadCareTips() {

    app.innerHTML = `
        <section class="care-tips-page">

            <h1>💡 Plant Care Tips</h1>

            <p class="care-tips-subtitle">
                Simple tips to keep your plants healthy and growing well.
            </p>

            <div class="care-tips-grid">

                <div class="care-tip-card">
                    <div class="care-tip-icon">💧</div>
                    <h3>Watering</h3>
                    <p>
                        Water your plants according to their needs.
                        Avoid both overwatering and letting the soil
                        remain completely dry.
                    </p>
                </div>

                <div class="care-tip-card">
                    <div class="care-tip-icon">☀️</div>
                    <h3>Sunlight</h3>
                    <p>
                        Provide the appropriate amount of sunlight
                        for your plant. Avoid exposing shade-loving
                        plants to excessive direct sunlight.
                    </p>
                </div>

                <div class="care-tip-card">
                    <div class="care-tip-icon">🌱</div>
                    <h3>Soil</h3>
                    <p>
                        Use suitable soil with good drainage to
                        support healthy root growth.
                    </p>
                </div>

                <div class="care-tip-card">
                    <div class="care-tip-icon">🌿</div>
                    <h3>Pruning</h3>
                    <p>
                        Remove dead or damaged leaves regularly
                        to encourage healthy plant growth.
                    </p>
                </div>

                <div class="care-tip-card">
                    <div class="care-tip-icon">🦠</div>
                    <h3>Disease Monitoring</h3>
                    <p>
                        Check your plants regularly for unusual
                        spots, discoloration, wilting, or other
                        signs of disease.
                    </p>
                </div>

                <div class="care-tip-card">
                    <div class="care-tip-icon">🔍</div>
                    <h3>Regular Monitoring</h3>
                    <p>
                        Observe your plants regularly and take
                        action early when you notice changes in
                        their appearance.
                    </p>
                </div>

            </div>

        </section>
    `;
}