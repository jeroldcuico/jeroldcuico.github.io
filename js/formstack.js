const URL_ADMIN = 'https://www.formstack.com/admin'
function isFormstackForms() {
    const url = window.location.href;
    const regex = /\.formstack\.com\/(forms|workflows)/i;
    const hasIndexPhp = /index\.php/i;
    return regex.test(url) && !hasIndexPhp.test(url);
}
let objectData = {};
if (isFormstackForms()) {
    const getForm = document.querySelector('.fsBody form');
    if (getForm) {
        const v3 = getForm.querySelector('input[name="style_version"]')?.value
        const v4 = getForm.querySelector('input[name="formstackFormSchemaVersion"]')?.value
        const formId = getForm.querySelector('input[name="form"]')?.value;
        objectData = {
            'version': v3 ?? v4,
            'formId': formId,
            'isErrorForm': false
        }
    }
}

function RenderAPACBuddy() {
    const { version, formId, isErrorForm } = objectData;
    if (isErrorForm === false) {
        RenderSideSnippet(formId, version);
    }
    console.log(objectData);
}
RenderAPACBuddy();

function validateEmail(email) {
    return email === "" ? "Email field is required" :
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? "Invalid email address" :
            true;
}
const fsAutoFill = (FORM_ID) => {
    const form = window.fsApi().getForm(FORM_ID);
    const emailField = document.getElementById('apac-email')
    const emailValue = emailField.value;
    form.getFields().forEach(field => {
        const type = field.getGeneralAttribute('type'); //Get the type of each field                                           
        const hidden = field.getGeneralAttribute('hidden'); //Get the hidden of each field      
        const id = field.getGeneralAttribute('id'); //Get the id of each field                                           
        const fieldValue = form.getField(id); //Get the field_id of each field    
        /* Randomized Select Radio button and checkboxes */
        const autoSelectOption = (fieldOption) => {
            const parent = document.querySelectorAll('.fsFieldCell fieldset');
            parent.forEach(idx => {
                const options = idx.querySelectorAll(fieldOption)
                let randOption = Math.floor(Math.random() * options.length);
                if (options.length > 0) {
                    options[randOption].checked = true;
                }
            })
        }
        /* Randomized Select Dropdown */
        const dropdownOption = fieldId => {
            const dropdown = document.getElementById(fieldId)
            let selectedIndex = Math.floor(Math.random() * dropdown.options.length)
            let selectedOption = dropdown.options[selectedIndex];
            fieldValue.setValue({ value: selectedOption.value });
        }

        if (hidden) return;
        switch (type) {
            case 'email':
                const validationResult = validateEmail(emailValue);
                if (validationResult !== true) {
                    alert(validationResult);
                    emailField.focus();
                }
                fieldValue.setValue({ value: emailValue });
                break;
            case 'text':
                fieldValue.setValue({ value: 'TestSupport' });
                break;
            case 'number':
                fieldValue.setValue({ value: '1' });
                break;
            case 'radio':
                autoSelectOption('input[type="radio"]')
                break;
            case 'checkbox':
                autoSelectOption('input[type="checkbox"]')
                break;
            case 'select':
                dropdownOption(`field${id}`)
                break;
            case 'address':
                fieldValue.setValue({ address: 'TestAddress1', address2: 'TestAddress2', city: 'TestCity', country: 'United States', state: 'FL', zip: '12345' });
                break;
            case 'name':
                fieldValue.setValue({ first: 'TestSupportJerold', last: 'TestSupport' });
                break;
            case 'phone':
                fieldValue.setValue({ value: '(315) 245 8485' });
                break;
            case 'textarea':
                fieldValue.setValue({ value: 'Lorem impsum test text' });
                break;
        }
    })
}
function RenderSideSnippet(formId, version) {
    const dataHTML = `
        <div id="sidenav">
                <a class="btn btn-success m-0 p-1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                    aria-controls="offcanvasExample"> <img
                        src="https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif" width="30" alt="logo">
                </a>
        </div>
        <div class="offcanvas offcanvas-end border border-success rounded" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel" style="height:65%;">
                <div class="offcanvas-header">
                    <h6 class="offcanvas-title" id="offcanvasExampleLabel">Formstack Form Information 🥰</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <span class="badge rounded-pill text-bg-primary">Form ID:</span>
                    <span class="fs-5 formId">${formId}</span>
                    <hr>
                    <div>
                        <span class="badge rounded-pill text-bg-warning mb-2">Builder:</span>
                        <span style="font-size:0.75rem;"><a class="text-wrap text-break" target="_blank"
                                href="${URL_ADMIN}/form/builder/${formId}/build">Click here to go Builder</a>
                        </span>
                    </div>                
                    <div><span class="badge rounded-pill text-bg-danger mb-2">Version: ${version}</span></div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control form-control-sm" id="apac-email" placeholder="name@formstack.com">
                        <label for="apac-email">Email address</label>
                    </div>             
                    <button type="button" class="fw-bold btn btn-sm btn-warning" id="autofill">AutoFill form for testing</button>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center fs-7 fw-bold">
                    <div style="font-size:0.75rem;">Show some tacos with love</div>
                        <div>
                        <img src="https://emoji.slack-edge.com/T029D39A0/cute_peace_jerold/6decf7ca78bf4b7f.png" width="30">
                        <img src="https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif" width="30">
                        </div>
                    </div>
                </div>
        </div>
        `
    const pureform = document.querySelector('.fsform-container');
    const workflow = document.querySelector('.fsForm');
    const htmlsnippet = `<div id="apac" class="m-0 p-0 position-absolute top-50 start-0" style="z-index:9999;">${dataHTML}</div>`;
    if(pureform){
        pureform.insertAdjacentHTML('beforebegin', htmlsnippet );
    }
    if(workflow){
        workflow.insertAdjacentHTML('beforebegin', htmlsnippet );
    }
    const autofill = document.getElementById('autofill');
    if(autofill){
        autofill.addEventListener('click', () => fsAutoFill(formId));
    }
}

function fsEmbedForm() {
    const elements = [
        ...document.querySelectorAll('script[src*="js.php"]'),
        ...document.querySelectorAll('iframe[src*="formstack.com"]')
    ];
    elements.forEach(({ tagName, src }) => {
        objectData[tagName.toLowerCase()] = src;
    });

    const badgeClass = 'iframe' in objectData ? 'bg-info' : 'bg-success';
    const urlValue = [objectData.IFRAME, objectData.SCRIPT]
        .filter(Boolean)
        .map(url => `<li class="list-group-item"><span class="badge ${badgeClass}">${url}</span></li>`)
        .join('');

    console.log(`
        <ul class="list-group">
            ${urlValue}
        </ul>
    `)
}
fsEmbedForm()
