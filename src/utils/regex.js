// Lista de Regex

const regexNumberCard = /(\d{4})(?=\d)/g;
const regexCPF = {
    start: /(\d{3})(\d)/,
    end: /(\d{3})(\d{2})$/
}
const regexTelefone = {
    start: /^(\d{2})(\d)/,
    end: /(\d{5})(\d)/
}
const regexCEP = /^(\d{5})(\d)/;
const regexOnlyNumbers = /[^0-9.-]/g;
const regexOnlyLetters = /[^A-Za-zÀ-ÿ\s]/gu;

export { regexNumberCard, regexCPF, regexTelefone, regexCEP, regexOnlyNumbers, regexOnlyLetters};