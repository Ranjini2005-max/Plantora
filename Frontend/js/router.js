import { loadLanding } from "./pages/landing.js";
import { loadHome } from "./pages/home.js";
import { loadMyPlants } from "./pages/myPlants.js";
import { loadScan } from "./pages/scan.js";
import { loadHistory } from "./pages/history.js";


export function showPage(page) {


    switch(page) {


        case "landing":

            loadLanding();

            break;



        case "home":

            loadHome();

            break;



        case "plants":

            loadMyPlants();

            break;



        case "scan":
            
            loadScan();

            break;
            

        case "history":

            loadHistory();

            break;



        default:

            loadLanding();

    }


}