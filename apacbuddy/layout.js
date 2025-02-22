import { loadStylesandScripts } from "./assets/resources.js";
import { SidebarIcon } from "./components/sidebar.js";
loadStylesandScripts();
const app = SidebarIcon();

//Added to body tag
document.body.insertAdjacentHTML("afterbegin", app);
