import { loadStyleResources } from "../external/resources.js";
import { RenderSideSnippet } from "../components/modal.js";
import {
  isFormstackForms,
  isFormstackSalesforce,
  logTemplate,
} from "../constants/constant.js";
import { SfAppModal } from "../components/sfappmodal.js";

let objectData = {}; // Load all resources

if (isFormstackForms() || isFormstackSalesforce()) {
  const resources = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
    "http://127.0.0.1:5500/APACBuddy/external/apacbuddy.css",
    "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js",
    "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
  ];

  resources.forEach(loadStyleResources); //Load UI Resources

  if (isFormstackForms()) {
    const getForm = document.querySelector(".fsBody form");
    if (getForm) {
      const v3 = getForm.querySelector('input[name="style_version"]')?.value;
      const v4 = getForm.querySelector(
        'input[name="formstackFormSchemaVersion"]'
      )?.value;
      const formId =
        getForm.querySelector('input[name="form"]')?.value ||
        document
          .querySelector(".fsform-container")
          ?.getAttribute("data-formid");
      objectData = {
        version: v3 ?? v4,
        formId: formId,
        isErrorForm: false,
      };
    } else {
      const errorForm = document
        .querySelector(".fsform-container")
        ?.getAttribute("data-formid");
      objectData = {
        formId: errorForm || "00000",
        version: errorForm ? 4 : 3,
        isErrorForm: true,
      };
    }
    /* Render Area */
    const { version, formId, isErrorForm } = objectData;
    RenderSideSnippet(formId, version, isErrorForm);
    console.log(objectData);
    logTemplate("Formstack Core Forms");
  }

  if (isFormstackSalesforce()) {
    logTemplate("Formstack for Salesforce");
    SfAppModal();
  }
}
