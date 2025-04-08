import { URL_ADMIN } from "../api/constant.js";
import { getFormId } from "../data/getFormId.js";
import formOptions from "./formOptions.js";

export function formDataBuilder() {
  const { formid, isErrorForm, version, product, errorId , formName, formPathname } = getFormId();

  console.log(getFormId());

  if (errorId === null && isErrorForm === true && formPathname.includes('forms'))
    return `
        <ul class="list-group mb-2 text-wrap">
            <li class="list-group-item"><span class="badge text-bg-primary">Form ID:</span> ${formid}</li>
            <li class="list-group-item"><span class="badge text-bg-dark">Form Name:</span> ${formName}</li>
            <li class="list-group-item"><span class="badge text-bg-warning pt-2">PathName:</span> <span class="fw-bold" style="font-size: 11px;">${formPathname}</span></li>
            <li class="list-group-item">Check if <b>Disable Hosted Form</b> is <a class="text-wrap text-break" target="_blank" href="${URL_ADMIN}/form/settings/${formid}/general">Enabled</a></li>
            <li class="list-group-item">Check if <b>Form</b> is <a class="text-wrap text-break" target="_blank" href="${URL_ADMIN}/form/dashboard/folder/deleted">Deleted</a></li>
            <li class="list-group-item">Check if <b>Form</b> is <a class="text-wrap text-break" target="_blank" href="${URL_ADMIN}/form/dashboard/folder/archived">Archived</a></li>
        </ul>
 `;

    if (isErrorForm === true && formPathname.includes('workflows'))
        return `
            <ul class="list-group mb-2 text-wrap">
            <li class="list-group-item text-center fw-bold">WORKFLOW UNPUBLISHED</li>
            <li class="list-group-item"><span class="badge text-bg-primary">Form ID:</span> ${formid}</li>
            <li class="list-group-item"><span class="badge text-bg-dark">Form Name:</span> ${formName}</li>
            ${formOptions()}
        </ul>
    `;


  return `
  <ul class="list-group mb-2 text-break">
            <li class="list-group-item"><span class="badge text-bg-primary">Form ID:</span> ${formid}</li>
            <li class="list-group-item"><span class="badge text-bg-dark">Form Name:</span> ${formName}</li>
            <li class="list-group-item"><span class="badge text-bg-warning pt-2">PathName:</span> <span class="fw-bold" style="font-size: 11px;">${formPathname}</span></li>
            <li class="list-group-item"><span class="badge text-bg-info">Type of Product:</span> ${product.toUpperCase()}</li>
            <li class="list-group-item"><span class="badge text-bg-danger px-2">Version: ${version}</span></li>
            ${formOptions()}                    
 </ul>`;
}
