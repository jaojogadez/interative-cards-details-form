import * as regex from "./apply-regex.js";
import * as dom from "../../utils/dom-elements.js";
import { validateInput } from "./feedback.js";

const stringInputs = document.querySelectorAll(".string");
const numberInputs = document.querySelectorAll(".number");

regex.validateNumberCard(dom.$numberCard);
regex.validateCPF(dom.$cpf);
regex.validateTEL(dom.$tel);
regex.validateCEP(dom.$cep);
regex.validateAddressNumberAndCVC(dom.$cvc);
regex.validateAddressNumberAndCVC(dom.$addressNumber);

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
