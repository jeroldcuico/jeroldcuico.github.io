import { getFormId } from "../data/getFormId.js";
import { formDataBuilder } from "./formDataBuilder.js";
import { sideBarFooter } from "./sideBarFooter.js";

export function formInformation() {
  const { isErrorForm } = getFormId();
  return `
    <div style="max-height:50%;" class="mx-2 my-2 offcanvas offcanvas-start border border-${isErrorForm === false ? `success` : `danger`} rounded" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" aria-modal="true" role="dialog">
            <div class="offcanvas-header bg-${isErrorForm === false  ? `success` : `danger` } bg-gradient text-white d-flex justify-content-between">
                <h6 class="offcanvas-title" id="offcanvasExampleLabel">Formstack Form Information 🥰</h6>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              ${formDataBuilder()}
             <div class="alert alert-warning p-2 fw-bold" style="font-size:13px !important;" role="alert">
              Before clicking the any links make sure you are logged in to the customer's Forms account product
             </div>
             ${sideBarFooter()}
            </div>
    </div>
    `;
}
