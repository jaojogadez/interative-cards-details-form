import * as regex from "./regex.js";
import { validateInput } from "./feedback.js";

/* FORM's ELEMENTs CARD INFO*/
const $holder = document.querySelector("#cardholder-name");
const $expMounth = document.querySelector("#cardholder-expdate");
const $expYear = document.querySelector("#cardholder-mmyy");
const $cvc = document.querySelector("#cardholder-cvc");

const $numberCard = document.querySelector("#cardholder-number");
const $cpf = document.querySelector("#cpf");
const $tel = document.querySelector("#tel");
const $cep = document.querySelector("#cep");

const stringInputs = document.querySelectorAll(".string");
const numberInputs = document.querySelectorAll(".number");

regex.validateNumberCard($numberCard);
regex.validateCPF($cpf);
regex.validateTEL($tel);
regex.validateCEP($cep);

stringInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = regex.onlyLetters(input.value);
    validateInput(input, "minLetters", "string");
  });
});

numberInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = regex.onlyNumbers(input.value);
  });
});
