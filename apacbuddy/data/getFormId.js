export function getFormId() {
    const formContainer = document.querySelector(".fsform-container");
    const dataid = formContainer ? formContainer.getAttribute("data-formid") ?? document.querySelector(".fsForm > input[name=form]").value : null;
    const formError = document.getElementById("error") || document.querySelector(".formError"); // If workflow is unpublished
    const isFormDisabled = document.querySelector('[class*="StyledErrorBanner"]'); // If form is unpublished and disabled
    const [product , formlinkName] = location.pathname.split("/").filter(Boolean)
    const formName = document.title.replace(/ - Formstack/g, "")
   
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
      version: version ?? document.querySelector(".fsForm > input[name=style_version]").value,
      product: product,
      formPathname: `${product}/${formlinkName}`,
      formName: formName,
      errorId: document.getElementById("error")?.textContent || null
    };
  }
  