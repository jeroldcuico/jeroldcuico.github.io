export function getFormId() {
    const formContainer = document.querySelector(".fsform-container");
    const dataid = formContainer ? formContainer.getAttribute("data-formid") : null;
    const formError = document.getElementById("error") || document.querySelector(".formError"); // If workflow is unpublished
    const isFormDisabled = document.querySelector('[class*="StyledErrorBanner"]'); // If form is unpublished and disabled
    const product = location.pathname.split("/")[1];
    const user = window.location.hostname;  
   
    let version = null;
  
    if (dataid) {
      const getForm = document.getElementById(`fsForm${dataid}`);
      if (getForm?.formstackFormSchemaVersion) {
        version = getForm.formstackFormSchemaVersion.value;
      }
    }
  
    return {
      formid: dataid,
      isErrorForm: !!(formError || isFormDisabled),
      version: version,
      product: product,
      user: user,
      errorId: document.getElementById("error")?.textContent || null
    };
  }
  