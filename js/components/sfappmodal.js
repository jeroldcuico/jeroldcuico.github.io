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
                    <!--<button type="button" class="fw-bold btn btn-md text-white btn-danger" id="sfappautofill">AutoFill</button>-->
                </div>   
        </div>
        `;
  const htmlsnippet = `<div id = "apac" class="m-0 p-0 position-absolute start-0" style = "z-index:9999; top: 50% !important;" > ${dataHTML}</div> `;
  dvFastForms.insertAdjacentHTML("beforebegin", htmlsnippet);
}

if (document.getElementById("sfappautofill")) {
  setTimeout(() => {
    document.getElementById("sfappautofill").addEventListener(
      "click",
      () => {
        const dvFastForms = document.getElementById("dvFastForms");
        const form = dvFastForms.querySelector("form");
        const formFields = form.querySelectorAll("input, select, textarea");
        formFields.forEach((field) => {
          if (document.getElementById(field.name)) console.log("true");
          if (field.type === "hidden") return;

          switch (field.type) {
            case "select-one":
              const dropdown = document.getElementById(field.name);
              if (!dropdown) return console.error("Dropdown not found!");

              const options = dropdown.options;
              if (options.length <= 1)
                return console.error("No valid options to select.");

              const randomOption =
                options[Math.floor(Math.random() * (options.length - 1)) + 1];
              dropdown.value = randomOption.value;
              break;
            case "select-multiple":
              const checkbox = document.getElementById(field.name);
              if (!checkbox) return console.error("Dropdown not found!");

              const optionscheck = checkbox.options;
              if (optionscheck.length <= 1)
                return console.error("No valid options to select.");

              const randomOptioncheck =
                optionscheck[
                  Math.floor(Math.random() * (optionscheck.length - 1)) + 1
                ];
              checkbox.value = randomOptioncheck.value;
              break;
            case "text":
              const text = document.getElementById(field.name);
              if (text) {
                text.value = "Formstack Salesforce Support Test";
              }
              break;
            case "textarea":
              const textarea = document.getElementById(field.name);
              if (textarea) {
                textarea.value =
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim, sequi inventore quidem unde possimus, similique rerum odio molestiae facere natus, nisi rem officiis nostrum pariatur temporibus. Corrupti, dicta enim!";
              }
              break;
            case "email":
              const email = document.getElementById(field.name);
              if (email) {
                email.value = "test@email.com";
              }
              break;
            default:
              break;
          }
          console.log("Field Name:", field.name);
          console.log("Field Type:", field.type);
          console.log("Field Value:", field.value);
        });
      },
      2000
    );
  });
}
