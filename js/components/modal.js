import { URL_ADMIN } from "../constants/constant.js";
import { fsEmbedForm, objectData } from "../snippet/index.js";
import { fsAutoFill } from "./autofill.js";

export function RenderSideSnippet(formId, version, isErrorForm) {
    const admin = URL_ADMIN;
    const typeofForm = location.pathname.split('/')[1];
    console.log(objectData);
    const embed = fsEmbedForm().filter(Boolean)
        .map(url => `<li class="list-group-item"><span class="badge">${url}</span></li>`)
        .join('');
    const credits = ` <div class="d-flex justify-content-between align-items-center fs-7 fw-bold mt-4">
                    <div style="font-size:0.75rem;">Show some tacos with love</div>
                        <div>
                        <img src="https://emoji.slack-edge.com/T029D39A0/cute_peace_jerold/6decf7ca78bf4b7f.png" width="30">
                        <img src="https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif" width="30">
                        </div>
                    </div>
                    </div>`
    const dataHTML = `
        <div id="sidenav">
                <a class="btn btn-success m-0 p-1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                    aria-controls="offcanvasExample"> <img
                        src="https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif" width="30" alt="logo">
                </a>
        </div>
       <div class="offcanvas offcanvas-end border border-success rounded" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel" style="max-height:60vh;">
                <div class="offcanvas-header">
                    <h6 class="offcanvas-title" id="offcanvasExampleLabel">Formstack Form Information 🥰</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ${!isErrorForm && version !== 4 ? `
                    <ul class="list-group">
                        <li class="list-group-item"><span class="badge rounded-pill text-bg-primary">Form ID:</span> <span class="fs-5 formId">${formId}</span></li>
                        <li class="list-group-item"><span class="badge rounded-pill text-bg-info">Type of Form:</span> <span class="fs-5 formId">${typeofForm.toUpperCase()}</span></li>
                        <li class="list-group-item"><span class="badge rounded-pill text-bg-warning mb-2">Builder:</span> <span style="font-size:0.75rem;"><a class="text-wrap text-break" target="_blank"
                                href="${admin}/form/builder/${formId}/build">Builder</a>
                        </span></li>
                        <li class="list-group-item"><span class="badge rounded-pill text-bg-danger mb-2">Version: ${version}</span></li>
                    </ul>    
                    ${version === '4' ? `
                        <hr>       
                        <span class="fs-6 italic">Add email address to populate in form</span>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control form-control-sm" id="apac-email" placeholder="name@formstack.com">
                            <label for="apac-email">Email address</label>
                        </div>
                        <button type="button" class="fw-bold btn btn-sm btn-warning" id="autofill">AutoFill form for testing</button>
                    ` : ``}
                    ${credits}
                  `:
            `<ul class="list-group">
                        ${isErrorForm && version === 4 ? `<li class="list-group-item"><span class="badge rounded-pill text-bg-primary">Form ID:</span> <span class="fs-5 formId">${formId}</span></li>`
                :
                `<li class="list-group-item">This is a Deactivated ${typeofForm === 'workflows' ? `Version 3 or 4 Workflows Form` : `Version 3 Form`}. </li>`}
                        <li class="list-group-item">Check if <b>Disable Hosted Form</b> is <a class="text-wrap text-break" target="_blank"
                                href="${admin}/form/settings/${formId}/general">Enabled</a></li>
                        <li class="list-group-item">Check if <b>Form</b> is <a class="text-wrap text-break" target="_blank"
                                href="${admin}/form/dashboard/folder/deleted">Deleted</a></li>
                        <li class="list-group-item">Check if <b>Form</b> is <a class="text-wrap text-break" target="_blank"
                                href="${admin}/form/dashboard/folder/archived">Archived</a></li>
                    </ul>
                    ${credits}`}
                </div>
        </div>
        `
    const ifFormisV4 = document.querySelector('.fsform-container');
    const ifFormisV3 = document.querySelector('.fsForm');
    const htmlsnippet = `<div id = "apac" class="m-0 p-0 position-absolute top-50 start-0" style = "z-index:9999;" > ${dataHTML}</div> `;
    if (ifFormisV4) {
        ifFormisV4.insertAdjacentHTML('beforebegin', htmlsnippet);
        if (document.getElementById('autofill')) {
            document.getElementById('autofill').addEventListener('click', () => fsAutoFill(formId));
        }
    }
    if (ifFormisV3) {
        ifFormisV3.insertAdjacentHTML('beforebegin', htmlsnippet);
    }
    if (isErrorForm && version === 3) {
        if (document.getElementById('error')) {
            document.getElementById('error').insertAdjacentHTML('beforebegin', htmlsnippet);
        }
        if (document.getElementById('disabledError')) {
            document.getElementById('disabledError').insertAdjacentHTML('beforebegin', htmlsnippet);
        }
    }
}