export function validateEmail(email) {
  return email === ""
    ? "Email field is required"
    : !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ? "Invalid email address"
    : true;
}
export const fsAutoFill = (FORM_ID) => {
  const form = window.fsApi().getForm(FORM_ID);
  const emailField = document.getElementById("apac-email");
  const emailValue = emailField.value;

  form.getFields().forEach((field) => {
    const type = field.getGeneralAttribute("type"); //Get the type of each field
    const hidden = field.getGeneralAttribute("hidden"); //Get the hidden of each field
    const id = field.getGeneralAttribute("id"); //Get the id of each field
    const fieldValue = form.getField(id); //Get the field_id of each field

    /* Randomized Select Radio button and checkboxes */
    const selectedOption = (selector) => {
      const buttons = document.querySelectorAll(`.fsBody fieldset ${selector}`);
      let selectedIndex = Math.floor(Math.random() * buttons.length);
      buttons[selectedIndex].checked = true;
      const selected = { [selectedIndex]: buttons[selectedIndex].value };
      switch (type) {
        case "checkbox":
          fieldValue.setValue(selected);
          break;
        case "radio":
          fieldValue.setValue({ value: buttons[selectedIndex].value });
          break;
      }
    };

    /* Randomized Select Dropdown */
    const dropdownOption = (fieldId) => {
      const dropdown = document.getElementById(fieldId);
      let selectedIndex = Math.floor(Math.random() * dropdown.options.length);
      let selectedOption = dropdown.options[selectedIndex];
      fieldValue.setValue({ value: selectedOption.value });
    };

    if (hidden) return; //Will not autopopulate if the field is hidden
    switch (type) {
      case "email":
        fieldValue.setValue({ value: emailValue });
        break;
      case "datetime":
        fieldValue.setValue({ value: new Date() });
        break;
      case "text":
        fieldValue.setValue({ value: "TestSupport" });
        break;
      case "number":
        fieldValue.setValue({ value: "1" });
        break;
      case "radio":
        selectedOption('input[type="radio"]');
        break;
      case "checkbox":
        selectedOption('input[type="checkbox"]');
        break;
      case "select":
        dropdownOption(`field${id}`);
        break;
      case "address":
        fieldValue.setValue({
          address: "TestAddress1",
          address2: "TestAddress2",
          city: "Florida",
          country: "United States",
          state: "FL",
          zip: "12345",
        });
        break;
      case "name":
        fieldValue.setValue({
          first: "TestSupport First",
          last: "TestSupport Last",
        });
        break;
      case "phone":
        fieldValue.setValue({ value: "(315) 245 8485" });
        break;
      case "textarea":
        fieldValue.setValue({ value: "Lorem impsum test text" });
        break;
    }
  });
};

export function SfAppAutofill() {
  setTimeout(() => {
    const dvFastForms = document.getElementById("dvFastForms");
    const form = dvFastForms.querySelector("form");
    const formFields = form.querySelectorAll("input, select, textarea");
    formFields.forEach((field) => {
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
      }
      console.log("Field Name:", field.name);
      console.log("Field Type:", field.type);
      console.log("Field Value:", field.value);
    });
  }, 1000);
}
