import { auth } from "../firebase.js";

const app = document.getElementById("app");

export function loadProfile() {

    const user = auth.currentUser;

    if (!user) {
        app.innerHTML = `
            <section class="profile-page">
                <h1>👤 Profile</h1>
                <p>No user is currently logged in.</p>
            </section>
        `;
        return;
    }

    app.innerHTML = `
        <section class="profile-page">

            <h1>👤 My Profile</h1>

            <div class="profile-card">

                <div class="profile-icon">
                    👤
                </div>

                <h2>Account Information</h2>

                <div class="profile-info">

                    <div class="profile-item">
                        <span>📧 Email</span>
                        <strong>${user.email}</strong>
                    </div>

                    <div class="profile-item">
                        <span>🆔 User ID</span>
                        <strong>${user.uid}</strong>
                    </div>

                </div>

                <button id="profileLogoutBtn" class="profile-logout-btn">
                    🚪 Logout
                </button>

            </div>

        </section>
    `;

    document
        .getElementById("profileLogoutBtn")
        .addEventListener("click", async () => {

            try {

                const logoutButton =
                    document.getElementById("profileLogoutBtn");

                logoutButton.disabled = true;
                logoutButton.textContent = "Logging out...";

                await import(
                    "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js"
                ).then(({ signOut }) => signOut(auth));

            } catch (error) {

                console.error("Logout error:", error);

                alert(error.message);

            }

        });
}