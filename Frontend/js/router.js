import { loadLanding } from "./pages/landing.js";
import { loadHome } from "./pages/home.js";

export function showPage(page) {

    switch (page) {

        case "landing":
            loadLanding();
            break;

        case "home":
            loadHome();
            break;

        default:
            loadLanding();

    }

}