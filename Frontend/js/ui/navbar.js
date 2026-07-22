import { showPage } from "../router.js";


const sidebar = document.getElementById("sidebar");



export function showSidebar() {


    if (!sidebar) return;



    sidebar.innerHTML = `

        <ul class="sidebar-menu">


            <li id="homeLink">
                🏠 Home
            </li>


            <li id="scanLink">
                📷 Scan Disease
            </li>


            <li id="plantsLink">
                🌱 My Plants
            </li>


            <li id="historyLink">
                📊 History
            </li>


            <li id="tipsLink">
                💡 Care Tips
            </li>


            <li id="profileLink">
                👤 Profile
            </li>


        </ul>

    `;



    document.getElementById("homeLink")
    ?.addEventListener("click", () => {

        showPage("home");

    });



    document.getElementById("scanLink")
    ?.addEventListener("click", () => {

        showPage("scan");

    });



    document.getElementById("plantsLink")
    ?.addEventListener("click", () => {

        showPage("plants");

    });


}




export function hideSidebar() {


    if (sidebar) {

        sidebar.innerHTML = "";

    }


}