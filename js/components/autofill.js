export function validateEmail(email) {
    return email === "" ? "Email field is required" :
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? "Invalid email address" :
            true;
}
export const fsAutoFill = (FORM_ID) => {
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