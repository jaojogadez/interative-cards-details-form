// Importa elemento e função para interar com o numberCard
import { numberCard } from "../../utils/dom-elements.js";
import { innerCard } from "../card.js";

// Função validateInput
import { validateInput } from "./feedback.js";

import * as regex from "../../utils/regex.js";

// Função para o número do cartão
export function validateNumberCard(input) {
  input.addEventListener("input", () => {
    const formatNumberCard = input.value
      .replace(regex.regexNumberCard, "$1 ")
      .slice(0, 19);
    input.value = formatNumberCard;
    validateInput(input, "card");
    innerCard(numberCard, input);
  });
}

// Função para validar o CPF
export function validateCPF(input) {
  input.addEventListener("input", () => {
    let cpf = onlyNumbers(input.value).slice(0, 14);
    cpf = cpf
      .replace(regex.regexCPF.start, "$1.$2")
      .replace(regex.regexCPF.start, "$1.$2")
      .replace(regex.regexCPF.end, "$1-$2");
    input.value = cpf;
    validateInput(input, "cpf");
  });
}

// Função para validar o telefone
export function validateTEL(input) {
  input.addEventListener("input", () => {
    setTimeout(() => {
      let tel = onlyNumbers(input.value).slice(0, 12);
      tel = tel
        .replace(regex.regexTelefone.start, "($1) $2")
        .replace(regex.regexTelefone.end, "$1-$2");
      input.value = tel;
      validateInput(input, "tel");
    });
  });
}

// Função para validar o cep
export function validateCEP(input) {
  input.addEventListener("input", () => {
    setTimeout(() => {
      let cep = onlyNumbers(input.value).slice(0, 9);
      cep = cep.replace(regex.regexCEP, "$1-$2");
      input.value = cep;
      validateInput(input, "cep");
    });
  });
}

// Função para validar número do endereço e o CVC
export function validateAddressNumberAndCVC(input) {
  input.addEventListener("input", () => {
    validateInput(input, "num");
  });
}

// Função para deixar somente números
export function onlyNumbers(value) {
  return value.replace(regex.regexOnlyNumbers, "");
}

// Função para deixar somente letras
export function onlyLetters(string) {
  return string.replace(regex.regexOnlyLetters, "");
}
