const app = document.getElementById("app");

export function loadLanding() {

    app.innerHTML = `
<section class="hero">

    <h1>🌿 Plantora</h1>

    <h2>Smart Plant Disease Detection</h2>

    <p>
        Detect plant diseases using Artificial Intelligence,
        manage your plants and receive personalized care
        recommendations.
    </p>

    <button id="heroLoginBtn" class="hero-btn">
        Get Started →
    </button>

    <div class="features">

        <div class="feature">
            🌱
            <h3>Disease Detection</h3>
        </div>

        <div class="feature">
            📊
            <h3>Plant Monitoring</h3>
        </div>

        <div class="feature">
            💡
            <h3>Care Tips</h3>
        </div>

    </div>

</section>
`;

    // Open login modal when button is clicked
    document.getElementById("heroLoginBtn").addEventListener("click", () => {

        document.getElementById("authModal").style.display = "flex";

        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupForm").style.display = "none";

    });

}