const URL_admin = 'https://www.formstack.com/admin'

const fsAutoFill = (FORM_ID) => {
    const form = window.fsApi().getForm(FORM_ID);
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
        const dropdownOption = className => document.querySelectorAll(className).forEach(dropdown => dropdown.selectedIndex = Math.floor(Math.random() * dropdown.options.length));

        if (hidden) return;
        switch (type) {
            case 'email':
                fieldValue.setValue({ value: 'email@formstack.com' });
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
                dropdownOption('.fsFieldSelect')
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
function fsInfo() {
    const forms = document.querySelectorAll('.fsForm');
    forms.forEach(form => {
        const v3 = form.querySelector('input[name="style_version"]')?.value
        const v4 = form.querySelector('input[name="formstackFormSchemaVersion"]')?.value
        const formId = form.querySelector('input[name="form"]').value;
        const dataHTMl = `
        <div id="sidenav">
                <a class="btn btn-success m-0 p-1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                    aria-controls="offcanvasExample"> <img
                        src="https://emoji.slack-edge.com/T029D39A0/formstack/35e5975aadd50866.gif" width="30" alt="logo">
                </a>
        </div>
        <div class="offcanvas offcanvas-end border border-success rounded" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel" style="width:24%; height:65%;">
                <div class="offcanvas-header">
                    <h6 class="offcanvas-title" id="offcanvasExampleLabel">Formstack Form Information 🥰</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <span class="badge rounded-pill text-bg-primary">Form ID:</span>
                    <span class="fs-5 formId">${formId}</span>
                    <hr>
                    <div><span class="badge rounded-pill text-bg-warning mb-2">Builder:</span>
                    <span style="font-size:0.75rem;"><a class="text-wrap text-break" target="_blank"
                            href="${URL_admin}/form/builder/${formId}/build">${URL_admin}/form/builder/${formId}/build</a>
                    </span>
                    </div>                
                    <hr>
                    <span class="badge rounded-pill text-bg-danger mb-2">Version: ${v3 ?? v4}</span>
                    <hr>
                    <button type="button" class="fw-bold btn btn-sm btn-warning" id="autofill">AutoFill form for testing</button>
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
        document.querySelector('.fsform-container')
            .insertAdjacentHTML('beforebegin', `<div id="apac" class="m-0 p-0 position-absolute top-50 start-0" style="z-index:9999;">${dataHTMl}</div>`);
        document.getElementById('autofill').addEventListener('click', () => fsAutoFill(formId));
    })
}
fsInfo()
