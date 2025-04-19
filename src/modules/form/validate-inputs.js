import * as regex from "./regex.js";
import { validateInput } from "./feedback.js";

/* FORM's ELEMENTs CARD INFO*/
const $holder = document.querySelector("#cardholder-name");
const $numberCard = document.querySelector("#cardholder-number");
const $expMounth = document.querySelector("#cardholder-expdate");
const $expYear = document.querySelector("#cardholder-mmyy");
const $cvc = document.querySelector("#cardholder-cvc");

const stringInputs = document.querySelectorAll(".string");
const numberInputs = document.querySelectorAll(".number");

regex.validateNumberCard($numberCard);

stringInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = regex.onlyLetters(input.value);
    validateInput(input, "minLetters", "string");
  });
});

numberInputs.forEach((input) => {
    input.addEventListener("input", () => {
        input.value = regex.onlyNumbers(input.value)
    })
})
