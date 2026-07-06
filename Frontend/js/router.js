import { loadLanding } from "./pages/landing.js";
import { loadHome } from "./pages/home.js";
import { loadMyPlants } from "./pages/myPlants.js";
export function showPage(page) {

    switch (page) {

        case "landing":
            loadLanding();
            break;

        case "home":
            loadHome();
            break;
            
        case "plants":
            loadMyPlants();
            break;

        default:
            loadLanding();

    }

}