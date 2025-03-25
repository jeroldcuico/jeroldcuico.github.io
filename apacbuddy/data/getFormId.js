export function getFormId() {
    const formContainer = document.querySelector(".fsform-container");
    const dataid = formContainer ? formContainer.getAttribute("data-formid") : null;
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
    const version_3 = document.querySelector(".fsForm > input[name=style_version]").value;
  
    return {
      formid: dataid ?? document.querySelector(".fsForm > input[name=form]").value,
      isErrorForm: !!(formError || isFormDisabled),
      version: version || version_3 ? version_3 : null,
      product: product,
      formPathname: `${product}/${formlinkName}`,
      formName: formName,
      errorId: document.getElementById("error")?.textContent || null
    };
  }
  