export const URL_ADMIN = "https://www.formstack.com/admin";
export const URL_index = "https://www.formstack.com/forms/index.php";

const url = window.location.href;
export function isFormstackForms() {
  const regex = /\.formstack\.com\/(forms|workflows)/i;
  const hasIndexPhp = /index\.php/i;
  return regex.test(url) && !hasIndexPhp.test(url);
}

export function isFormstackSalesforce() {
  const regex = /formstack\.io\//;
  return regex.test(url);
}

export function logTemplate(message) {
  console.log(
    `\n%c ${message} 🚀`,
    "color:#0dd8d8; background:#0b1021; font-size:1rem; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;"
  );
}
