import { SlideOptions } from "./slideOptions.js";

export function SidebarIcon() {
  return `
    <div id="apac" class="m-0 p-0 position-absolute start-0" style="z-index:9999; top: 61% !important; "> 
        <div id="sidenav">
            <a class="btn btn-success m-0 p-1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <img src="https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif" width="30" alt="logo" class="sidenavlogo" id="sidenavlogo">
            </a>
        </div>
        ${SlideOptions()}
    </div>`;
}
