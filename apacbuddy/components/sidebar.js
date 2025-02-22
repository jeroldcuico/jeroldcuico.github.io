import { formInformation } from "./formInformation.js";
import { newFeature } from "./whatsnew.js";
export function SidebarIcon() {
  return `
     <div class="m-0 p-0 position-absolute start-0 fab-container ">
        <div class="btn btn-success m-0 p-1 fab shadow">
                 <img src="https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif" alt="sidebar" width="35">
        </div>
        <div class="sub-button shadow-sm border border-success border-3 rounded">          
            <a class="d-flex items-center justify-center" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button">
                 <img src="https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/2139-fe0f.png" alt="forms" width="25">
            </a>
        </div>
        <div class="sub-button shadow-sm border border-success border-3 rounded">          
            <a class="d-flex items-center justify-center" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
             <img src="https://emoji.slack-edge.com/T029D39A0/forms/cfdc800a5430effd.gif" alt="forms" width="25">
            </a>
        </div>
        ${formInformation()}
    </div>

    <!---Pop ups here------>
    ${newFeature()}

    `;
}
