import { loadStylesandScripts } from "./assets/resources.js";
import { SidebarIcon } from "./components/sidebar.js";
loadStylesandScripts();
const app = SidebarIcon();
document.querySelector("#app").insertAdjacentHTML("beforebegin", app);
