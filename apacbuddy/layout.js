import { isFormstackForms } from "./api/constant.js";
import { loadStylesandScripts } from "./assets/resources.js";
import { SidebarIcon } from "./components/sidebar.js";
//Added to body tag
if (isFormstackForms()) {
  const app = SidebarIcon();
  loadStylesandScripts();
  document.body.insertAdjacentHTML("afterbegin", app);
}
