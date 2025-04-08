import { URL_ADMIN } from "../api/constant.js";
import { getFormId } from "../data/getFormId.js";

export default function formOptions() {
  const { formid } = getFormId();
  return `
        <li class="list-group-item">
            <div class="d-flex  justify-content-evenly ">
                <div class="d-flex align-items-center ">
                    <i class="bx bxs-buildings bx-tada bx-sm text-warning"></i> 
                    <span style="font-size:0.75rem;"><a class="text-wrap text-break" target="_blank" href="${URL_ADMIN}/form/builder/${formid}/build">Builder</a></span>
                </div>
                <div class="d-flex align-items-center ">
                    <i class="bx bxs-cog bx-spin bx-sm text-danger "></i>
                    <span style="font-size:0.75rem;"><a class="text-wrap  text-break" target="_blank" href="${URL_ADMIN}/form/settings/${formid}/general">Settings</a></span>
                </div>
                
                <div class="d-flex align-items-center ">
                    <i class="bx bxs-note bx-flashing bx-sm text-success"></i>
                    <span style="font-size:0.75rem;"><a class="text-wrap text-break" target="_blank"href="${URL_ADMIN}/submission/${formid}">Submissions</a> </span>
                </div>
            </div>
        </li>  
  `;
}
