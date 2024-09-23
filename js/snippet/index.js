import { loadStyleResources } from "../external/resources.js";
import { RenderSideSnippet } from "../components/modal.js";
import { isFormstackForms } from "../constants/constant.js";

const resources = [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',]

export let objectData = {};
if (isFormstackForms()) {
    resources.forEach(e => loadStyleResources(e))
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
    } else {
        //If this is an error page like if Forms is disable hosting etc.
        if (document.querySelector('.fsform-container')) {
            const errorForm = document.querySelector('.fsform-container').getAttribute('data-formid')
            objectData = {
                'formId': errorForm,
                'version': 4,
                'isErrorForm': true
            }
        } else {
            objectData.formId = '00000' //Cant get the formId in error V3
            objectData.version = 3
            objectData.isErrorForm = true
        }
    }
}
/* Render Area */
const { version, formId, isErrorForm } = objectData;
if (isErrorForm === false) {
    RenderSideSnippet(formId, version, isErrorForm);
} else {
    RenderSideSnippet(formId, version, isErrorForm);
}

export function fsEmbedForm() {
    const elements = [
        ...document.querySelectorAll('script[src*="js.php"]'),
        ...document.querySelectorAll('iframe[src*="formstack.com"]')
    ];
    elements.forEach(({ tagName, src }) => {
        objectData[tagName] = src;
    });
    return [objectData.IFRAME, objectData.SCRIPT].filter(Boolean) || [];
}

