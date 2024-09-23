export const URL_ADMIN = 'https://www.formstack.com/admin'
export const URL_index = 'https://www.formstack.com/forms/index.php'

export function isFormstackForms() {
    const url = window.location.href;
    const regex = /\.formstack\.com\/(forms|workflows)/i;
    const hasIndexPhp = /index\.php/i;
    return regex.test(url) && !hasIndexPhp.test(url);
}


export function SlackEmojis(){
    return {
        workflows: '',
        forms: '',
        builder: '',
        version: ''
    }
}

