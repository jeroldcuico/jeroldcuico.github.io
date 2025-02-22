import { getFormId } from "../data/getFormId.js";
import { formDataBuilder } from "./formDataBuilder.js";

export function formInformation() {
  const {user} = getFormId(); 
  return `
    <div class="offcanvas offcanvas-start border border-success rounded" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="max-height:60vh;" aria-modal="true" role="dialog">
            <div class="offcanvas-header bg-success bg-gradient text-white d-flex justify-content-between">
                <h6 class="offcanvas-title" id="offcanvasExampleLabel">Formstack Form Information 🥰</h6>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

              ${formDataBuilder()}


             <div class="alert alert-warning p-2 fw-bold" style="font-size:13px !important;" role="alert">
              Before clicking the any links make sure you are logged in to the customer's Forms account product
             </div>
            </div>
    </div>
    `;
}
