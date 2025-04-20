import * as regex from "./regex.js";
import { validateInput } from "./feedback.js";

/* FORM's ELEMENTs INFO*/
const $cvc = document.querySelector("#cardholder-cvc");
const $addressNumber = document.querySelector("#numberAdress");
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
regex.validateAddressNumberAndCVC($cvc)
regex.validateAddressNumberAndCVC($addressNumber)

// Aplica regex para permitir somente letras
stringInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = regex.onlyLetters(input.value);
    validateInput(input, "minLetters", "string");
  });
});

// Aplica regex para permitir somente números
numberInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = regex.onlyNumbers(input.value);
  });
});
