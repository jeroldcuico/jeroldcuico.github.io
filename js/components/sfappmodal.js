export function SfAppModal() {
  const dataHTML = `
        <div id="sidenav">
                <a class="btn btn-light m-0 p-1 border border-primary rounded border-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                    aria-controls="offcanvasExample"> <img
                        src="https://emoji.slack-edge.com/T029D39A0/old-man-yells-at-salesforce/72af2eeadfb951b4.png" width="35" alt="logo" class="sidenavlogo" id="sidenavlogo">
                </a>
        </div>
       <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header bg-primary bg-gradient text-white">
                    <h6 class="offcanvas-title" id="offcanvasExampleLabel">Formstack for Salesforce 🥰</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                </div>   
        </div>
        `;
  const htmlsnippet = `<div id = "apac" class="m-0 p-0 position-absolute start-0" style = "z-index:9999; top: 50% !important;" > ${dataHTML}</div> `;
  dvFastForms.insertAdjacentHTML("beforebegin", htmlsnippet);
}
