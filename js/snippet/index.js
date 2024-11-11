import { loadStyleResources } from "../external/resources.js";
import { RenderSideSnippet } from "../components/modal.js";
import { isFormstackForms } from "../constants/constant.js";

const resources = [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    'http://127.0.0.1:5500/APACBuddy/external/apacbuddy.css',
    'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js',
    'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
]

export let objectData = {}; // Load all resources

if (isFormstackForms()) {
    resources.forEach(loadStyleResources);
    const getForm = document.querySelector('.fsBody form');
    if (getForm) {
        const v3 = getForm.querySelector('input[name="style_version"]')?.value;
        const v4 = getForm.querySelector('input[name="formstackFormSchemaVersion"]')?.value;
        const formId = getForm.querySelector('input[name="form"]')?.value;
        objectData = {
            'version': v3 ?? v4,
            'formId': formId,
            'isErrorForm': false
        };
    } else {
        const errorForm = document.querySelector('.fsform-container')?.getAttribute('data-formid');
        objectData = {
            'formId': errorForm || '00000',
            'version': errorForm ? 4 : 3,
            'isErrorForm': true
        };
    }
    /* Render Area */
    const { version, formId, isErrorForm } = objectData;
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

