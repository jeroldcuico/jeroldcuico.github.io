import { loadStyleResources } from "../external/resources.js";
import { RenderSideSnippet } from "../components/modal.js";
import { isFormstackForms } from "../constants/constant.js";

const resources = [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    'https://jeroldcuico.github.io/js/external/apacbuddy.css',
    'https://code.jquery.com/jquery-3.7.1.js',
    'https://code.jquery.com/ui/1.14.0/jquery-ui.js',
    'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js',
    'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
]

export let objectData = {};// Load all resources
if (isFormstackForms()) {
    resources.forEach(loadStyleResources);

    // Poll until jQuery is available
    const checkForjQuery = setInterval(() => {
        if (typeof $ !== 'undefined') {
            clearInterval(checkForjQuery); // Stop polling when jQuery is available
            $(document).ready(function () {
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

                //Draggable

                $(function () {
                    $("#sidenav").draggable();
                    $("#offcanvasExample").draggable({
                        cancel: ".offcanvas-body",
                        cursor: "crosshair"
                    });
                });

                /* Render Area */
                const { version, formId, isErrorForm } = objectData;
                RenderSideSnippet(formId, version, isErrorForm);
            });
        }
    }, 100); // Check every 100ms until jQuery is loaded
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

