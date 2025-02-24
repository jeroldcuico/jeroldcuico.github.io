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