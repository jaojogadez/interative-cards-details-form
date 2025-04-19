// Importa elemento e função para interar com o numberCard
import { numberCard } from "../card.js";
import { innerCard } from "../card.js";

// Função validateInput
import { validateInput } from "./feedback.js";

// Função para o número do cartão
export function validateNumberCard(input) {
  input.addEventListener("input", () => {
    const regexNumberCard = /(\d{4})(?=\d)/g;
    const formatNumberCard = input.value
      .replace(regexNumberCard, "$1 ")
      .slice(0, 19);
    input.value = formatNumberCard;
    validateInput(input, "card");
    innerCard(numberCard, $numberCard);
  });
}

// Função para validar o CPF
export function validateCPF(input) {
  input.addEventListener("input", () => {
    // Remove tudo que não é número
    let cpf = onlyNumbers(input.value).slice(0, 11);
    cpf = cpf
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{2})$/, "$1-$2");
    input.value = cpf;
    validateInput(input, "cpf");
    console.log(input.value);
  });
}

// Função para deixar somente números
export function onlyNumbers(value) {
  return value.replace(/\D/g, "");
}

// Função para deixar somente letras
export function onlyLetters(string) {
  return string.replace(/[^A-Za-zÀ-ÿ\s]/gu, "");
}
