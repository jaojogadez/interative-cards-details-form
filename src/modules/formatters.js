export function formatCPF(value) {
  return value
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2");
}

export function formatTel(value) {
  return value
    .slice(0, 11)
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1 $2");
}

export function formatCep(value) {
  return value.slice(0, 8).replace(/^(\d{5})(\d)/, "$1-$2");
}

export function formatCardNumber(value) {
  const regexNumberCard = /(\d{4})(?=\d)/g;
  return value.replace(regexNumberCard, "$1 ").slice(0, 19);
}
