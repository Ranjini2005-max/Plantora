const sidebar = document.getElementById("sidebar");

export function showSidebar() {

    sidebar.innerHTML = `

        <ul class="sidebar-menu">

            <li id="homeLink">🏠 Home</li>

            <li id="scanLink">📷 Scan Disease</li>

            <li id="plantsLink">🌱 My Plants</li>

            <li id="historyLink">📊 History</li>

            <li id="tipsLink">💡 Care Tips</li>

            <li id="profileLink">👤 Profile</li>

        </ul>

    `;

}

export function hideSidebar() {

    sidebar.innerHTML = "";

}